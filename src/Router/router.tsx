import NotFound from '../components/NotFound/NotFound'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home/Home'
import MovieDetail from '../components/MovieDetail/MovieDetail'
import TopRated from '../components/TopRated/TopRated'


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:type/:id" element={<MovieDetail />} />
      <Route path="/top_rated" element={<TopRated/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Router