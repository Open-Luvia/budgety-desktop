import AccountsService from '@/services/accounts.service.js'

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
        getAccounts({ commit }) {
            return AccountsService.getAccounts()
                .then(response => {
                    commit('SET_ACCOUNTS', response.data)
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
