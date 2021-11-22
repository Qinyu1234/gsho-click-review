import { reqCategoryList } from "@/api";
const state = {
    categoryList:[]
}
const mutations = {
    RECIVE_CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    }
}
const actions = {
    async getCategoryList({commit}){
        debugger
        const result = await reqCategoryList()
        
        if(result.code === 200){
            commit('RECIVE_CATEGORYLIST',result.data)
        }
    }
}
const getters = {}

export default ({
    state,
    mutations,
    actions,
    getters
})