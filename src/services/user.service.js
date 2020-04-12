import store from '@/store/store.js'
import apiClient from '@/services/apiClient'

apiClient.interceptors.request.use(
   config => {
      const token = store.state.accessToken
      if (token) {
         config.headers['Authorization'] = 'Bearer ' + token
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
