import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
// Styling import
import 'bootstrap' 
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSlidersH } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSlidersH) 
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Components with name BaseName.vue are registered globally
const requireComponent = require.context(
  './components/base_components',     //Path
  false,                              //Don't search in subdirectories
  /Base[A-Z]\w+\.(vue|js)$/           //Regex for the search
)
requireComponent.keys().forEach(fileName => { 
  const componentConfig = requireComponent(fileName)
  const componentName = upperFirst(
      camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1')) //Pascal Case conversion
  )
  Vue.component(componentName, componentConfig.default || componentConfig) // Components registered globally
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
