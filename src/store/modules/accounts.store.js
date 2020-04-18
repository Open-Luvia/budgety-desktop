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
            user_id: rootState.user_id
         }
         await AccountsApi.getAccounts(payload)
            .then(response => {
               commit('SET_ACCOUNTS', response.data.accounts)
               dispatch('transactions/setAccounts', getters.accounts_ids, {
                  root: true
               })
            })
            .catch(error => {
               console.log(
                  'There was a problem fetching your accounts: ' + error.message
               )
            })
      },
      async newAccount({ dispatch, rootState }, account) {
         const payload = {
            name: account.name,
            account_type_id: 2,
            initial_balance: account.initial_balance,
            user_id: rootState.user_id
         }
         await AccountsApi.createAccount(payload)
            .then(() => {
               dispatch('getAccounts')
            })
            .catch(error => {
               console.log('There was a problem creating your account: ', error)
            })
      }
   },
   getters: {
      accounts_ids(state) {
         return state.accounts.map(account => account.id)
      }
   }
}
