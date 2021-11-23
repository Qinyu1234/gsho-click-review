import { reqCategoryList,reqBannerList,reqRecommends,reqFloors,reqBrands } from "@/api";
const state = {
    categoryList:[],
    bannerList:{},
    recommendList:{},
    floorList:{},
    brandList:[]
}
const mutations = {
    RECIVE_CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    },
    RECEIVE_BANNERLIST(state,bannerList){
        state.bannerList = bannerList
    },
    RECEIVE_RECOMMENDS(state,recommendList){
        state.recommendList = recommendList
    },
    RECEIVE_FLOORS(state,floorList){
        state.floorList = floorList
    },
    RECEIVE_BRANDS(state,brandList){
        state.brandList = brandList
    }
}
const actions = {
    async getCategoryList({commit}){
        const result = await reqCategoryList()
        if(result.code === 200){
            commit('RECIVE_CATEGORYLIST',result.data)
        }
    },
    async getBannerList({commit}){
        const result = await reqBannerList()
        if(result.code === 200){
            commit('RECEIVE_BANNERLIST',result.data)
        }
    },
    async getRecommends({commit}){
        const result = await reqRecommends()
        if(result.code === 200){
            commit('RECEIVE_RECOMMENDS',result.data)
        }
    },
    async getFloors({commit}){
        const result = await reqFloors()
        if(result.code === 200){
            commit('RECEIVE_FLOORS',result.data)
        }
    },
    async getBrands({commit}){
        const result = await reqBrands()
        if(result.code === 200){
            commit('RECEIVE_BRANDS',result.data)
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