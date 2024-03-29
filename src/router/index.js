import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import Signin from '../views/Signin'
import Signup from '../views/Signup'

import Forgotpassword from '../views/Forgotpassword'
import Changepassword from '../views/Changepassword'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/signin',
        name: 'Signin',
        component: Signin
    },
    {
        path: '/forgotpassword',
        name: 'Forgotpassword',
        component: Forgotpassword
    },
    {
        path: '/changepassword',
        name: 'Changepassword',
        component: Changepassword
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup
    },
    {
        path: '/main',
        component: Main,


        children: [{
                path: '/profile',
                name: 'Profile',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/Profile.vue')
            },
            {
                path: '/dashboard',
                name: 'Dashboard',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/Dashboard.vue')
            },
            {
                path: '/orders',
                name: 'orders',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/Orders.vue')
            },
            {
                path: '/laundry',
                name: 'Laundry',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/Laundry.vue')
            },
            {
                path: '/checkout',
                name: 'Checkout',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/Checkout.vue')
            }
        ]
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router