import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/pages/Login.vue'
import Register from '@/pages/Register.vue'
import NotFound from '@/pages/NotFound.vue'
import Dashboard from '@/pages/Dashboard.vue'
import Accounts from '@/pages/Accounts.vue'
import Settings from '@/pages/Settings.vue'

Vue.use(VueRouter)

const router = new VueRouter({
   mode: 'history',
   routes: [
      {
         path: '*',
         redirect: { name: '404' }
      },
      {
         path: '/',
         name: 'login',
         component: Login,
         // beforeEnter: (to, from, next) => {
         //    const loggedIn = localStorage.getItem('accessToken')
         //    if(loggedIn){
         //       next({ name: 'dashboard' })
         //    }
         // }
      },
      {
         path: '/register',
         name: 'register',
         component: Register,
         // beforeEnter: (to, from, next) => {
         //    const loggedIn = localStorage.getItem('accessToken')
         //    if(loggedIn){
         //       next({ name: 'dashboard' })
         //    }
         // }
      },
      {
         path: '/404',
         name: '404',
         component: NotFound
      },
      {
         path: '/settings',
         name: 'settings',
         component: Settings,
         meta: { requireAuth: true }
      },
      {
         path: '/dashboard',
         name: 'dashboard',
         component: Dashboard,
         meta: { requireAuth: true }
      },
      {
         path: '/accounts',
         name: 'accounts',
         component: Accounts,
         meta: { requireAuth: true }
      }
   ]
})

router.beforeEach((to, from, next) => {
   const loggedIn = localStorage.getItem('accessToken')
   if (to.matched.some(record => record.meta.requireAuth) && !loggedIn) {
      next('/')
   }
   next()
})

export default router
