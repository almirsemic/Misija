import CircularProgress from '@mui/material/CircularProgress'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { useNavigate } from 'react-router-dom'
import { Typography } from '@mui/material'

interface Props {
  error?: string | null
}
const Progress: React.FC<Props> = (props: Props) => {
  const navigate = useNavigate()
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '90vh',
      }}
    >
      <Box sx={{ mx: 4 }}>
        <CircularProgress />
      </Box>
      {props.error && (
        <Box sx={{ display: 'inherit' }}>
          <Typography sx={{ color: 'red' }}>{props.error}</Typography>
          <Button
            variant="outlined"
            color="error"
            sx={{ mx: 2 }}
            onClick={() => navigate('/')}
          >
            Home
          </Button>
        </Box>
      )}
    </Box>
  )
}

export default Progress
