import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import { SetStateAction, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CardsSchema from '../CardsSchema/CardsSchema'
import debounce from 'lodash.debounce'
import { useDispatch } from 'react-redux'
import { setParams } from '../../Redux/paramsSlice'

const Home = () => {
  const [buttonIsActive, setButtonIsActive] = useState<boolean>(true)
  const [select, setSelect] = useState<string>('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const searchHeandler = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    dispatch(
      setParams({
        info: 'base_info',
        titleType: `${buttonIsActive ? 'movie' : 'tvSeries'}`,
        exact: event.target.value.length ? false : undefined,
        url: event.target.value.length
          ? `/titles/search/title/${event.target.value}`
          : '/titles',
        list: !event.target.value.length
          ? buttonIsActive
            ? 'most_pop_movies'
            : 'most_pop_series'
          : undefined,
      }),
    )
  }

  const deboundsSearchHeandler = useCallback(debounce(searchHeandler, 1000), [])

  function setState(arg: boolean) {
    if (buttonIsActive !== arg) {
      const list = arg ? 'most_pop_movies' : 'most_pop_series'
      const titleType = arg ? 'movie' : 'tvSeries'
      dispatch(
        setParams({ info: 'base_info', list, titleType, url: '/titles' }),
      )
      setButtonIsActive(arg)
      setSelect('')
    }
  }

  function handleSelect(val: string) {
    const genre = val && val !== 'year.decr' ? val : undefined
    const sort = val === 'year.decr' ? val : undefined
    const titleType = buttonIsActive ? 'movie' : 'tvSeries'
    const params = val
      ? { url: '/titles', info: 'base_info', genre, sort, titleType }
      : {
          info: 'base_info',
          list: buttonIsActive ? 'most_pop_movies' : 'most_pop_series',
          titleType,
          url: '/titles',
        }
    dispatch(setParams(params))
    setSelect(val)
  }
  return (
    <Box>
      <Box sx={{ my: 2 }}>
        <Button
          variant={buttonIsActive ? 'contained' : 'outlined'}
          color={buttonIsActive ? 'success' : 'error'}
          onClick={() => setState(true)}
        >
          Movies
        </Button>
        <Button
          sx={{ mx: 1 }}
          variant={!buttonIsActive ? 'contained' : 'outlined'}
          color={buttonIsActive ? 'error' : 'success'}
          onClick={() => setState(false)}
        >
          Series
        </Button>
        <Button variant="contained" onClick={() => navigate('/top_rated')}>
          Top Rated
        </Button>
      </Box>
      <Box
        sx={{
          display: 'inline-flex',
          width: 500,
          maxWidth: '100%',
          my: 3,
        }}
      >
        <TextField
          label="Search ..."
          id="Search ..."
          onChange={deboundsSearchHeandler}
        />
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Sorting by</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={select}
              label="Sorting by"
              onChange={(event) => handleSelect(event.target.value as string)}
            >
              <MenuItem value="">Default</MenuItem>
              <MenuItem value={'Comedy'}>Comedy</MenuItem>
              <MenuItem value={'Action'}>Action</MenuItem>
              <MenuItem value={'Drama'}>Drama</MenuItem>
              <MenuItem value={'year.decr'}>Release year</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <CardsSchema />
    </Box>
  )
}

export default Home
