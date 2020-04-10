import Vue from 'vue'
import Vuex from 'vuex'

//import the auto importer
import modules from './modules'
import accounts from './modules/accounts.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules,
    accounts // all your modules automatically imported
})
