import apiClient from '@/services/apiClient'

export default {
   getCategories() {
      return apiClient.get('/categories')
   }
}
