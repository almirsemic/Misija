import { BrowserRouter } from 'react-router-dom'
import axiosInstance from './Axios/axiosInstance'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './Redux/store'
import axios from 'axios'
import App from './App'

axios.defaults.baseURL = axiosInstance.defaults.baseURL
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
)
