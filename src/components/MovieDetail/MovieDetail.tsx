import Box from '@mui/material/Box'
import { useNavigate, useParams } from 'react-router-dom'
import useFetchData from '../../CustomHooks/useFetchData'
import Progress from '../NotFound/Progress'
import { Card, CardMedia, Typography } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import { Button, CardActionArea, CardActions } from '@mui/material'
import Rating from '@mui/material/Rating'

const MovieDetail = () => {
  const navigate = useNavigate()
  const {type, id} = useParams()
  const { titles, error }: any = useFetchData({info: 'base_info', url: `titles/${id}`, titleType: type})
  
  return (
    <Box>
      {titles && titles.results ? (
        <Box
          sx={{
            width: '100%',
            height: '90vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Card sx={{ maxWidth: 700, marginTop: 30 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="500"
                image={titles.results.primaryImage?.url}
                alt="green iguana"
                sx={{
                  objectFit: 'fill',
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {titles.results.titleType.text} <br />
                  {titles.results.titleText.text}
                  <Rating
                    name="read-only"
                    value={titles.results.ratingsSummary.aggregateRating / 2}
                    readOnly
                  />
                </Typography>
                <Box color="text.secondary">
                  {titles.results.plot.plotText.plainText}
                  <Typography variant="h5">
                    Ganres:
                    {titles.results.genres.genres.map((item: any) => (
                      <Typography variant="body1" key={item.id}>
                        {item.text}
                      </Typography>
                    ))}
                    Release date:
                    <Typography variant="body1">
                      {titles.results.releaseDate.day}/
                      {titles.results.releaseDate.month}/
                      {titles.results.releaseDate.year}
                    </Typography>
                    Runtime:
                    <Typography variant="body1">
                      {Math.floor(titles.results.runtime.seconds / 3600)}H{' '}
                      {(titles.results.runtime.seconds % 3600) / 60}min
                    </Typography>
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button variant="outlined" onClick={() => navigate('/')}>
                Home
              </Button>
            </CardActions>
          </Card>
        </Box>
      ) : (
        <Progress error={error} />
      )}
    </Box>
  )
}

export default MovieDetail
