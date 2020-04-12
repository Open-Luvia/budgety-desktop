import apiClient from '@/services/apiClient'

export default {
   getAccounts() {
      return apiClient.get('/accounts')
   }
}
