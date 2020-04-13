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
      getAccounts({ commit, rootState }) {
         const payload = {
            user_id: rootState.user.id
         }
         console.log(payload)
         AccountsApi.getAccounts(JSON.stringify(payload))
            .then(response => {
               commit('SET_ACCOUNTS', response.data)
            })
            .catch(error => {
               console.log(
                  'There was a problem fetching your accounts: ' + error.message
               )
            })
      }
   }
}
