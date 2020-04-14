import apiClient from '@/api/apiClient.js'

export default {
   getUserInfo(userID) {
      const url = '/users/'+userID
      return apiClient.get(url)
   }
}