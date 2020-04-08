import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../pages/Login.vue'
import SignUp from '../pages/SignUp.vue'
import NotFound from '../pages/NotFound.vue'
import Dashboard from '../pages/Dashboard.vue'
import Accounts from '../pages/Accounts.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/signup',
            name: 'signup',
            component: SignUp
        },
        {
            path: '/404',
            name: '404',
            component: NotFound
        },
        {
            path: '/',
            name: "dashboard",
            component: Dashboard
        },
        {
            path: '/accounts',
            name: "accounts",
            component: Accounts
        },
        {
            path: '*',
            redirect: { name: '404' }
        }
    ]
})