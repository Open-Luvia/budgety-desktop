import Vue from 'vue'
import Vuex from 'vuex'

//import the auto importer
import modules from './modules';

Vue.use(Vuex);

export default new Vuex.Store({
  modules, // all your modules automatically imported 
})