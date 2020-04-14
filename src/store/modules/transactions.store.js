import TransactionsApi from '@/api/modules/transactions.api.js'

export default {
   namespaced: true,
   state: {
      transactions: null
   },
   mutations: {
      SET_ACCOUNTS(state, accounts) {
         state.transactions = accounts
      },
      SET_TRANSACTIONS_BY_ACCOUNT(state, params) {
         const accountID = params.accountID
         const data = params.data
         state.transactions.set(accountID, data)
      }
   },
   actions: {
      async getTransactionsByAccount({ commit, rootState }, accountID) {
         const payload = {
            per_page: 20,
            user_id: rootState.userID
         }
         await TransactionsApi.getTransactionsByAccount(accountID, payload)
            .then(response => {
               const params = {
                  data: response.data.data,
                  accountID: accountID
               }
               commit('SET_TRANSACTIONS_BY_ACCOUNT', params)
            })
            .catch(error => {
               console.log(
                  'There was a problem fetching your transactions: ',
                  error
               )
            })
      },
      setAccounts({ commit }, param) {
         var accountsIDs = new Map()
         param.forEach(item => {
            accountsIDs.set(item, new Array())
         })

         commit('SET_ACCOUNTS', accountsIDs)
      }
   }
}
