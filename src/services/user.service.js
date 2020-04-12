import axios from 'axios'
import store from '@/store/store.js'

const apiClient = axios.create({
   baseURL: 'http://tdw-api.mooo.com/api',
   headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
   },
   timeout: 1000
})

apiClient.interceptors.request.use(
   config => {
      const token = store.state.accessToken
      if (token) {
         config.headers['Authorization'] = 'Bearer '+token
      }
      return config
   },
   error => {
      return Promise.reject(error)
   }
)

export default {
   checkLogin() {
      return apiClient.get('/users/me')
   }
}
