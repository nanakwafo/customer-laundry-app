import Vue from 'vue'
import Vuex from 'vuex'

import userSignup from './modules/userSignup'
import userSignin from './modules/userSignin'
import userLogout from './modules/userLogout'
import userVerification from './modules/userVerification'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {

    },
    mutations: {},
    actions: {},
    modules: {
        userSignup,
        userSignin,
        userLogout,
        userVerification
    }
})