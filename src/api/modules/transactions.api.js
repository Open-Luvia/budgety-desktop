import apiClient from '@/api/apiClient.js'

export default {
   getTransactionsByAccount(account_id, payload){
      const baseUrl = '/transactions/account/'+account_id
      return apiClient.post(baseUrl, payload)
   },
   newTransaction(payload){
      console.log(payload)
      return apiClient.post('/transactions/new', payload)
   }
}