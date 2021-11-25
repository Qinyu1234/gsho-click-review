import { reqDetailInfo } from '@/api'
const state = {
    detailInfo:{}
}
const mutations = {
    RECIVE_GETDETAILINFO(state,detailInfo){
        state.detailInfo = detailInfo
    },
    isChecked(state,{indexs,index}){
        state.detailInfo.spuSaleAttrList[indexs].spuSaleAttrValueList.forEach(){
            
        }
    }
}
const actions = {
    async getDetailInfo({commit},skuId){
        const result = await reqDetailInfo(skuId)    
        if(result.code === 200){
            commit('RECIVE_GETDETAILINFO',result.data)
        }
    }
}
const getters = {
    categoryView(){
        return state.detailInfo.categoryView
    },
    spuSaleAttrList(){
        return state.detailInfo.spuSaleAttrList
    },
    skuInfo(){
        return state.detailInfo.skuInfo
    },
    skuImageList(){
        return state.detailInfo.skuInfo.skuImageList || []
    }
}

export default ({
    state,
    mutations,
    actions,
    getters
}) 