import { reqTrade } from "@/api";
const state = {
    tradeInfo:{}
}
const mutations = {
    RECEIVE_TRADE(state,tradeInfo){
        state.tradeInfo = tradeInfo
    }
}
const actions = {
    async getTrade({commit}){
        const result = await reqTrade()
        if(result.code === 200){
            commit('RECEIVE_TRADE',result.data)
        }
    } 
}
const getters = {
    userAddressList(){
        return state.tradeInfo.userAddressList || []
    },
    detailArrayList(){
        return state.tradeInfo.detailArrayList || []
    }
}

export default({
    state,
    mutations,
    actions,
    getters
})