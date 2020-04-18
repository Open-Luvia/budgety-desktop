import apiClient from '@/api/apiClient'

export default {
   getAccounts(payload) {
      return apiClient.post('/accounts', payload)
   },
   createAccount(payload) {
      return apiClient.post('/accounts/new', payload)
   }
}
