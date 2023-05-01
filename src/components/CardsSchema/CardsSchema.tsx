import useFetchData from '../../CustomHooks/useFetchData'
import { Result } from '../../Types/types'
import {
  Button,
  CardActionArea,
  CardActions,
  CardMedia,
  Grid,
} from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import Box from '@mui/material/Box'
import { useNavigate } from 'react-router-dom'
import Progress from '../NotFound/Progress'
import { useSelector } from 'react-redux'
import { RootState } from '../../Redux/store'


const CardsSchema: React.FC = () => {
  const params = useSelector((state: RootState) => state.params)
  const { titles, error }: any = useFetchData(params)
  const navigate = useNavigate()
  return (
    <Box>
      {titles && titles.results ? (
        <Box>
          <Grid container spacing={2}>
            {titles.results.map((item: Result) => (
              <Grid item xs={12} sm={3} key={item.id}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={item.primaryImage?.url}
                      alt={item.primaryImage?.__typename}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.titleText.text}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Release year: {item.releaseYear?.year} <br />
                        Release date: {item.releaseDate?.day}{' '}
                        {item.releaseDate?.month} {item.releaseDate?.year}
                      </Typography>
                      <Box
                        sx={{
                          '& > legend': { mt: 2 },
                        }}
                      >
                        <Typography component="legend">Rated:</Typography>
                        <Rating
                          name="read-only"
                          value={item.ratingsSummary.aggregateRating / 2}
                          readOnly
                        />
                      </Box>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => navigate(`/${params.titleType}/${item.id}`)}
                    >
                      Detail
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ) : (
        <Progress error={error} />
      )}
    </Box>
  )
}

export default CardsSchema
