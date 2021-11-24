import {reqSearchList} from '@/api'
const state = {
    searchList:{}
}
const mutations = {
    RECEIVE_GETSEARCHLIST(state,searchList){
        state.searchList = searchList
    }
}
const actions = {
    async getSearchList({commit},searchParams){
        console.log('search--getSearchList---',JSON.stringify(searchParams))
        const result = await reqSearchList(searchParams)
        if(result.code === 200){
            commit('RECEIVE_GETSEARCHLIST',result.data)
        }
    }
    
}
const getters = {
    trademarkList(){
        return state.searchList.trademarkList || []
    },
    attrsList(){
        return state.searchList.attrsList || []
    },
}

export default ({
    state,
    mutations,
    actions,
    getters
})
