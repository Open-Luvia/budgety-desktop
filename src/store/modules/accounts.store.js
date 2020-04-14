import AccountsApi from '@/api/modules/accounts.api.js'

export default {
   namespaced: true,
   state: {
      accounts: []
   },
   mutations: {
      SET_ACCOUNTS(state, accounts) {
         state.accounts = accounts
      }
   },
   actions: {
      async getAccounts({ commit, dispatch, getters, rootState }) {
         const payload = {
            user_id: rootState.userID
         }
         await AccountsApi.getAccounts(JSON.stringify(payload))
            .then(response => {
               commit('SET_ACCOUNTS', response.data.data)
               console.log(response)
               dispatch('transactions/setAccounts', getters.accountsIDs, { root: true })
            })
            .catch(error => {
               console.log(
                  'There was a problem fetching your accounts: ' + error.message
               )
            })
      }
   },
   getters: {
      accountsIDs(state) {
         return state.accounts.map(account => account.id)
      }
   }
}
