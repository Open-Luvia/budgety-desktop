import apiClient from '@/api/apiClient'

export default {
   getUserInfo() {
      return apiClient.get('/users/me')
   }
}
