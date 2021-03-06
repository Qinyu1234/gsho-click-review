import Vue from "vue";
import Vuex from 'vuex'
Vue.use(Vuex)

import home from './modules/home.js'
import search from './modules/search.js'
import detail from './modules/detail.js'
import shopcart from './modules/shopcart.js'
import payabout from './modules/payAbout.js'
import userInfo from './modules/userInfo.js'
const state = {}
const mutations = {}
const actions = {}
const getters = {}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules:{
        home,
        search,
        detail,
        shopcart,
        payabout,
        userInfo,
    }
})