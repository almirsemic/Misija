import CardsSchema from '../CardsSchema/CardsSchema'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'
import Box from '@mui/material/Box'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setParams } from '../../Redux/paramsSlice'

const TopRated = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
        setParams({
          info: 'base_info',
          list: 'top_rated_250',
          url: '/titles',
        }),
      )
  }, [dispatch])

  return (
    <Box>
      <Button variant="outlined" onClick={() => navigate('/')}>
        Home
      </Button>
      <Typography
        sx={{
          variant: 'h1',
          textAlign: 'center',
          my: 5,
          color: 'primary.main',
          fontSize: '32px',
          fontWeight: 'bold',
        }}
      >
        Top Rated
      </Typography>
      <CardsSchema />
    </Box>
  )
}

export default TopRated
