import { useEffect, useState } from 'react'
import axios, { CancelTokenSource } from 'axios'
import { MoviesSeries, Result, paramsType } from '../Types/types'

const useFetchData = (params: paramsType) => {
  const [titles, setTitles] = useState<MoviesSeries | Result | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const cancelToken: CancelTokenSource = axios.CancelToken.source()
    async function fetchData(): Promise<void> {
      try {
        const { url, ...restParams } = params
        const response = await axios.get<MoviesSeries | Result>(
          `${params.url}`,
          {
            params: {
              ...restParams,
            },
            headers: {
              'content-type': 'application/octet-stream',
              'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
              'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
            },
            cancelToken: cancelToken.token,
          },
        )
        if (response.status === 200) {
          setTitles(response.data)
        }
      } catch (error: any) {
        if (axios.isCancel(error)) {
          console.log('Request canceled:', error.message)
        } else {
          setError(error.response.data.error)
          console.warn(error)
        }
      }
    }
    fetchData()
    return () => {
      cancelToken.cancel('Component unmounted')
    }
  }, [
    params.info,
    params.url,
    params.list,
    params.titleType,
    params.exact,
    params.sort,
    params.genre,
  ])
  return { titles, error }
}

export default useFetchData
