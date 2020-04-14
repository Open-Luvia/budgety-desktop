import Vue from 'vue'
import Vuex from 'vuex'
import AuthApi from '@/api/modules/auth.api.js'
import TokenValidator from '@/api/modules/tokenValidator.api.js'
import UserApi from '@/api/modules/user.api.js'

//import the auto importer
import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
   modules: modules, // all your modules automatically imported
   state: {
      accessToken: '',
      userID: null,
      user: null
   },
   mutations: {
      SET_TOKEN(state, token) {
         state.accessToken = token
         localStorage.setItem('accessToken', token)
      },
      CLEAR_LOCAL_STORAGE() {
         localStorage.clear()
         location.reload()
      },
      GET_TOKEN(state) {
         state.accessToken = localStorage.getItem('accessToken')
      },
      GET_USER_ID(state) {
         state.userID = localStorage.getItem('userID')
      },
      SET_USER_ID(state, userID) {
         state.userID = userID
         localStorage.setItem('userID', userID)
      },
      SET_USER(state, user){
         state.user = user
      }
   },
   actions: {
      async register({ commit }, credentials) {
         await AuthApi.register(credentials)
            .then(response => {
               commit('SET_TOKEN', response.data.access_token)
               commit('SET_USER_ID', response.data.user.id),
               commit('SET_USER', response.data.user)
            })
            .catch(error => {
               console.log(error)
            })
      },
      async login({ commit }, credentials) {
         await AuthApi.login(credentials)
            .then(response => {
               commit('SET_TOKEN', response.data.access_token)
               commit('SET_USER_ID', response.data.user.id)
               commit('SET_USER', response.data.user)
            })
            .catch(error => {
               console.log(error)
            })
      },
      async logout({ commit }) {
         await AuthApi.logout()
            .then(() => {
               commit('CLEAR_LOCAL_STORAGE')
            })
            .catch(error => {
               console.log(error)
            })
      },
      getDataFromLocalStorage({ commit }) {
         commit('GET_TOKEN')
         commit('GET_USER_ID')
      },
      async checkTokenValidity() {
         await TokenValidator.checkTokenValidity()
            .then(response => {
               if (response.status == 204) {
                  return true
               }
            })
            .catch(() => {
               localStorage.removeItem('accessToken')
               return false
            })
      },
      async getUserInfo({ commit, state }){
         const userID = state.userID
         await UserApi.getUserInfo(userID).then(response => {
            commit('SET_USER', response.data)
         }).catch(error => {
            console.log("There was a problem getting you user info: "+error)
         })
      }
   },
   getters: {
      loggedIn(state) {
         return !!state.accessToken
      }
   }
})
