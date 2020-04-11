import Vue from 'vue'
import Vuex from 'vuex'

//import the auto importer
import modules from './modules'
//import accounts from '@/store/modules/accounts.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: modules // all your modules automatically imported
})
