import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/pages/Login.vue'
import Register from '@/pages/Register.vue'
import NotFound from '@/pages/NotFound.vue'
import Dashboard from '@/pages/Dashboard.vue'
import Accounts from '@/pages/Accounts.vue'
import Settings from '@/pages/Settings.vue'

Vue.use(VueRouter)

export default new VueRouter({
   mode: 'history',
   routes: [
      {
         path: '/',
         name: 'login',
         component: Login
      },
      {
         path: '/register',
         name: 'register',
         component: Register
      },
      {
         path: '/404',
         name: '404',
         component: NotFound
      },
      {
         path: '/settings',
         name: 'settings',
         component: Settings
      },
      {
         path: '/dashboard',
         name: 'dashboard',
         component: Dashboard
      },
      {
         path: '/accounts',
         name: 'accounts',
         component: Accounts
      },
      {
         path: '*',
         redirect: { name: '404' }
      }
   ]
})
