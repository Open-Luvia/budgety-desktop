import apiClient from '@/api/apiClient'

export default {
   getAccounts(payload) {
      return apiClient.post('/accounts', payload)
   }
}
