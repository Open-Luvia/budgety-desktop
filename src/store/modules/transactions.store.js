import TransactionsApi from '@/api/modules/transactions.api.js'

export default {
   namespaced: true,
   state: {
      transactions_tree: []
   },
   mutations: {
      SET_ACCOUNTS(state, transactions_tree) {
         state.transactions_tree = transactions_tree
      },
      SET_TRANSACTIONS_BY_ACCOUNT(state, params) {
         const account_id = params.account_id
         const data = params.data
         state.transactions_tree.find(
            list => list.account_id == account_id
         ).transactions = state.transactions_tree
            .find(list => list.account_id == account_id)
            .transactions.concat(data)
      }
   },
   actions: {
      async getTransactionsByAccount({ commit, rootState }, account_id) {
         const payload = {
            per_page: 20,
            user_id: rootState.user_id
         }
         await TransactionsApi.getTransactionsByAccount(account_id, payload)
            .then(response => {
               const params = {
                  data: response.data.data,
                  account_id: account_id
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
      async newTransaction({ rootState }, transaction) {
         const payload = {
            description: transaction.description,
            date: transaction.date,
            account_id: transaction.account_id,
            user_id: rootState.user_id,
            items: transaction.items
         }
         await TransactionsApi.createTransaction(payload).catch(error => {
            console.log(
               'There was a problem creating your transaction: ',
               error
            )
         })
      },
      async deleteTransaction({ rootState }, transaction_id) {
         const payload = {
            user_id: rootState.user_id
         }
         await TransactionsApi.deleteTransaction(transaction_id, payload).catch(
            error => {
               console.log(
                  'There was a problem deleting your transaction',
                  error
               )
            }
         )
      },
      setAccounts({ commit }, param) {
         var transactions_by_account = []
         param.forEach(item => {
            var account = {
               account_id: item,
               transactions: []
            }
            transactions_by_account.push(account)
         })
         commit('SET_ACCOUNTS', transactions_by_account)
      }
   },
   getters: {
      transactions_tree_is_empty(state) {
         return state.transactions_tree.length == 0
      },
      transactions_by_account: state => account_id => {
         return state.transactions_tree.find(
            item => item.account_id == account_id
         ).transactions
      }
   }
}
