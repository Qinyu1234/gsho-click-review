import { reqDetailInfo } from '@/api'
const state = {
    detailInfo:{}
}
const mutations = {
    RECIVE_GETDETAILINFO(state,detailInfo){
        state.detailInfo = detailInfo
    },
    CHANGECHECKED(state,spuSaleAttrList){
        state.detailInfo.spuSaleAttrList = spuSaleAttrList
    }
}
const actions = {
    async getDetailInfo({commit},skuId){
        const result = await reqDetailInfo(skuId)    
        if(result.code === 200){
            commit('RECIVE_GETDETAILINFO',result.data)
        }
    },
    changeChecked({commit},spuSaleAttrList){
        commit('CHANGECHECKED',spuSaleAttrList)
    }
}
const getters = {
    categoryView(){
        return state.detailInfo.categoryView || {}
    },
    spuSaleAttrList(){
        return state.detailInfo.spuSaleAttrList || []
    },
    skuInfo(){
        return state.detailInfo.skuInfo || {}
    }
}

export default ({
    state,
    mutations,
    actions,
    getters
}) 