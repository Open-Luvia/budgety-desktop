import apiClient from '@/api/apiClient'

apiClient.interceptors.request.use(
   config => {
      const token = localStorage.getItem('accessToken')
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
   checkTokenValidity(){
      return apiClient.get('/users/token')
   }
}