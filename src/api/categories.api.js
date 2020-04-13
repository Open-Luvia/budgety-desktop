import apiClient from '@/api/apiClient'

export default {
   getCategories() {
      return apiClient.get('/categories')
   }
}
