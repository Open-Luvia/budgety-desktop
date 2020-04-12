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
      SET_TOKEN(state, token) {
         state.accessToken = token
         localStorage.setItem('accessToken', JSON.stringify(token))
      },
      CLEAR_TOKEN(){
         localStorage.removeItem('accessToken')
         location.reload()
      },
      CHECK_TOKEN(state){
         const token = localStorage.getItem('accessToken')
         if(token){
            state.accessToken = token
         }
      }
   },
   actions: {
      register({ commit }, credentials) {
         AuthService.register(credentials).then(response => {
            commit('SET_TOKEN', response.data.access_token)
         })
      },
      login({ commit }, credentials) {
         AuthService.login(credentials).then(response => {
            commit('SET_TOKEN', response.data.access_token)
         })
      },
      logout({ commit }){
         AuthService.logout().then(() => {
            commit('CLEAR_TOKEN')
         })
      },
      checkToken({ commit }){
         commit('CHECK_TOKEN')
      }
   },
   getters: {
      loggedIn(state){
         return !!state.accessToken
      }
   }
})
