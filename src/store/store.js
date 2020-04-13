import Vue from 'vue'
import Vuex from 'vuex'
import AuthService from '@/services/auth.service.js'
import TokenValidator from '@/services/tokenValidator.service.js'

//import the auto importer
import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
   modules: modules, // all your modules automatically imported
   state: {
      accessToken: ''
   },
   mutations: {
      SET_TOKEN(state, token) {
         state.accessToken = token
         localStorage.setItem('accessToken', token)
      },
      CLEAR_TOKEN() {
         localStorage.removeItem('accessToken')
         location.reload()
      },
      GET_TOKEN(state) {
         state.accessToken = localStorage.getItem('accessToken')
      }
   },
   actions: {
      register({ commit }, credentials) {
         AuthService.register(credentials)
            .then(response => {
               commit('SET_TOKEN', response.data.access_token)
            })
            .catch(error => {
               console.log(error)
            })
      },
      login({ commit }, credentials) {
         AuthService.login(credentials)
            .then(response => {
               commit('SET_TOKEN', response.data.access_token)
            })
            .catch(error => {
               console.log(error)
            })
      },
      logout({ commit }) {
         AuthService.logout()
            .then(() => {
               commit('CLEAR_TOKEN')
            })
            .catch(error => {
               console.log(error)
            })
      },
      getTokenFromLocalStorage({ commit }) {
         commit('GET_TOKEN')
      },
      checkTokenValidity() {
         TokenValidator.checkTokenValidity()
            .then(response => {
               if (response.status == 200) {
                  console.log('Valid token')
               }
            })
            .catch(() => {
               console.log('Expired token')
               localStorage.removeItem('accessToken')
            })
      }
   },
   getters: {
      loggedIn(state) {
         return !!state.accessToken
      }
   }
})
