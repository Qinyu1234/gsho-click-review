import {reqAddOrUpdataCart,reqCartList} from '@/api'

const state = {
    cartList:[]
}
const mutations = {
    RECEIVE_CARTLIST(state,cartList){
        state.cartList = cartList
    }
}
const actions = {
    async addOrUpdataCart({commit},{skuId,shopNum}){
        try {
            console.log('addOrUpdataCart---',skuId,'--',shopNum)
            await reqAddOrUpdataCart(skuId,shopNum)
            return 'ok'
        } catch (error) {
            return Promise.reject(error)
        }
    },
    async getCartList({commit}){
        const result =await reqCartList()
        if(result.code === 200){
            commit('RECEIVE_CARTLIST',result.data)
        }
    },
}
const getters = {}

export default ({
    state,
    mutations,
    actions,
    getters
})