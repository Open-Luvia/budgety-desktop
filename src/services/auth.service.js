import apiClient from '@/services/apiClient'

export default {
   register(credentials) {
      return apiClient.post('/users/register', credentials)
   },
   login(credentials) {
      return apiClient.post('/users/login', credentials)
   },
   logout(){
      return apiClient.get('/users/logout')
   }
}
