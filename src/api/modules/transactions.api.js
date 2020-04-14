import apiClient from '@/api/apiClient.js'

export default {
   getTransactionsByAccount(accountID, payload){
      const baseUrl = '/transactions/account/'+accountID
      return apiClient.post(baseUrl, payload)
   }
}