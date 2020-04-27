import apiClient from '@/api/apiClient'

export default {
   getCategories(payload) {
      // console.log('Getting categories...', payload)
      return apiClient.post('/categories', payload)
   }
}
