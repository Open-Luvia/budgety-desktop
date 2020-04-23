import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/pages/Login.vue'
import Register from '@/pages/Register.vue'
import NotFound from '@/pages/NotFound.vue'
import Dashboard from '@/pages/Dashboard.vue'
import Account from '@/pages/Account.vue'
import Settings from '@/pages/Settings.vue'

import AccountsLoader from '@/pages/AccountsLoader.vue'

import NewTransaction from '@/components/views/NewTransaction.vue'
import NewAccount from '@/components/views/NewAccount.vue'
import SettingsCategories from '@/components/views/SettingsCategories.vue'
import NewCategory from '@/components/views/NewCategory.vue'
import EditTransaction from '@/components/views/EditTransaction.vue'

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
         component: Settings,
         meta: { requireAuth: true },
         children: [
            {
               path: 'categories',
               name: 'settingsCategories',
               component: SettingsCategories,
               children: [
                  {
                     path: 'new',
                     name: 'newCategory',
                     component: NewCategory
                  }
               ]
            }
         ]
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
         component: AccountsLoader,
         children: [
            {
               path: 'new',
               name: 'firstAccount',
               component: NewAccount
            }
         ]
      },
      {
         path: '/accounts/:account_id/show',
         name: 'account',
         component: Account,
         props: true,
         children: [
            {
               path: ':id/transaction/edit',
               name: 'editTransaction',
               component: EditTransaction,
               props: true
            },
            {
               path: ':id/transaction/new',
               name: 'newTransaction',
               component: NewTransaction,
               props: true
            },
            {
               path: 'new',
               name: 'newAccount',
               component: NewAccount
            }
         ],
         meta: { requireAuth: true }
      }
   ]
})

router.beforeEach((to, from, next) => {
   const logged_in = localStorage.getItem('access_token')
   if (to.matched.some(record => record.meta.requireAuth) && !logged_in) {
      next('/')
   }
   next()
})

export default router
