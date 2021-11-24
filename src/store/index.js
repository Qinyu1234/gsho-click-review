import Vue from "vue";
import Vuex from 'vuex'
Vue.use(Vuex)

import home from './modules/home.js'
import search from './modules/search.js'
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
        search
    }
})