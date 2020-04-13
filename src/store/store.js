import Vue from 'vue'
import Vuex from 'vuex'
import AuthApi from '@/api/auth.api.js'
import UsersApi from '@/api/users.api.js'
import TokenValidator from '@/api/tokenValidator.api.js'

//import the auto importer
import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
   modules: modules, // all your modules automatically imported
   state: {
      accessToken: '',
      user: null
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
      },
      SET_USER(state, payload) {
         state.user = payload
      }
   },
   actions: {
      register({ commit }, credentials) {
         AuthApi.register(credentials)
            .then(response => {
               commit('SET_TOKEN', response.data.access_token)
            })
            .catch(error => {
               console.log(error)
            })
      },
      login({ commit }, credentials) {
         AuthApi.login(credentials)
            .then(response => {
               commit('SET_TOKEN', response.data.access_token)
            })
            .catch(error => {
               console.log(error)
            })
      },
      logout({ commit }) {
         AuthApi.logout()
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
                  return true
               }
            })
            .catch(() => {
               localStorage.removeItem('accessToken')
               return false
            })
      },
      async getUserInfo({ commit }){
         await UsersApi.getUserInfo()
            .then(response => {
               commit('SET_USER', response.data.user)
            })
            .catch(error => {
               console.log(
                  'There was a problem setting your user info: ',
                  error.response
               )
            })
      }
   },
   getters: {
      loggedIn(state) {
         return !!state.accessToken
      }
   }
})
