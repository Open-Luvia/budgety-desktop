import Vue from 'vue'
import App from './App.vue'
import router from './router/routes'
import store from './store/store'
/*
*  Lodash library
*/
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

/*
*  bootstrap-vue
*/ 
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

/*
*  fontawesome
*/ 
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas) 
Vue.component('font-awesome-icon', FontAwesomeIcon)

/*
*  Components with name BaseName.vue are registered globally
*/ 
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
