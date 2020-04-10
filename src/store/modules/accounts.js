import AccountsService from '@/services/AccountsService.js'

export default {
    namespaced: true,
    state: {
        accounts: []
    },
    mutations: {
        GET_ACCOUNTS(state, accounts) {
            state.accounts = accounts
        }
    },
    actions: {
        getAccounts({ commit }) {
            return AccountsService.getAccounts()
                .then(response => {
                    commit('GET_ACCOUNTS', response.data)
                })
                .catch(error => {
                    console.log(
                        'There was a problem fetching your accounts: ' +
                            error.message
                    )
                })
        }
    }
}