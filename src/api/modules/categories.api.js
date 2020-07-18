import apiClient from '@/api/apiClient'

export default {
   getCategories (payload) {
      // console.log('Getting categories...', payload)
      return apiClient.post('/categories', payload)
   },
   createCategory (payload) {
      return apiClient.post('/categories/new', payload)
   },
   updateCategory (payload) {
      return apiClient.post('/categories/' + payload.id + '/update', payload)
   }
}
