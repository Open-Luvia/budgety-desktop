import Vue from 'vue'
import Vuex from 'vuex'
import AuthService from '@/services/auth.service.js'

//import the auto importer
import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: modules, // all your modules automatically imported
    state: {
        accessToken: null
    },
    mutations: {
        SET_TOKEN(state, token){
            state.accessToken = token
            localStorage.setItem('user', JSON.stringify(token))
        }
    },
    actions: {
        register({ commit }, credentials) {
            AuthService.sendRegistrationCredentials(credentials).then(({data}) => {
                commit('SET_USER_DATA', data)
            })
        },
        login({commit}, credentials) {
            return AuthService.sendLoginCredentials(credentials).then(response => {
                commit('SET_TOKEN', response.data.access_token)
            })
        }
    }
})
