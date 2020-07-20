import axios from 'axios'
import store from '@/store/store.js'

const apiClient = axios.create({
   baseURL: 'http://localhost:8080/', //da modificare in base al server di backend
   headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
   },
   timeout: 5000
})

apiClient.interceptors.request.use(
   config => {
      if (store.getters.logged_in) {
         config.headers['Authorization'] = 'Bearer ' + store.state.access_token
      }
      return config
   },
   error => {
      return Promise.reject(error)
   }
)

export default apiClient
