import apiClient from '@/api/apiClient'

export default {
   getCategories(payload) {
      return apiClient.post('/categories', payload)
   }
}
