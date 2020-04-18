import apiClient from '@/api/apiClient.js'

export default {
   getTransactionsByAccount(account_id, payload) {
      const baseUrl = '/transactions/account/' + account_id
      return apiClient.post(baseUrl, payload)
   },
   createTransaction(payload) {
      console.log('Creating transaction...', payload)
      return apiClient.post('/transactions/new', payload)
   }
}
