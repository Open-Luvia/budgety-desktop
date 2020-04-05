import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../pages/Login.vue'
import SignUp from '../pages/SignUp.vue'
import NotFound from '../pages/NotFound.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
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
            component: NotFound,
        },
        {
            path: '*',
            redirect: { name: '404' }
        }
    ]
})