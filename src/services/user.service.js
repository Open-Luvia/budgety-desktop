import apiClient from '@/services/apiClient'

export default {
   checkLogin() {
      return apiClient.get('/users/me')
   }
}
