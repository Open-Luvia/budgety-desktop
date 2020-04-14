import TransactionsApi from '@/api/modules/transactions.api.js'

export default {
   namespaced: true,
   state: {
      transactions: []
   },
   mutations: {
      SET_ACCOUNTS(state, accounts){
         state.transactions = accounts
      }
   },
   actions: {
      async getTransactionsByAccount({ rootState }, accountID){
         const payload = {
            per_page: 20,
            user_id: rootState.userID
         }
         await TransactionsApi.getTransactionsByAccount(accountID, payload).then(response => {
            console.log(response.data.data)
         }).catch(error => {
            console.log("There was a problem fetching your transactions: ",error)
         })
      }
   },
   getters: {}
}
