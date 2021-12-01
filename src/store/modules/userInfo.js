import {getUserTempId,getToken,setToken,removeToken } from "@/util";
import {reqLogin} from '@/api'
const state = {
    token: getToken(),
    userInfo: {},
    userTempId: getUserTempId(),
    userAddressList: [], // 用户地址
}
const mutations = {
    RECEIVE_LOGIN(state,userInfo){
        state.userInfo = userInfo
    },
    RECEIVE_TOKEN(state,token){
        state.token = token
    },
    OUTLOGIN(state){
        state.userInfo = {}
        state.token = ''
    }

}
const actions = {
    async Login({commit},userInfo){
       try {
            const result = await reqLogin(userInfo)
            if(result.code === 200){
                commit('RECEIVE_LOGIN',result.data)
                commit('RECEIVE_TOKEN',result.data.succ.token)
                // 将token保存到local中
                setToken(result.data.succ.token)
            }
       } catch (error) {
            throw new Error(result.message || '登陆失败了')
       }
    },
    outLogin({commit}){
        removeToken()
        commit('OUTLOGIN')
    }
}
const getters = {
    user(){
        return state.userInfo.user || {}
    },
    succ(){
        return state.userInfo.succ || {}
    }
}

export default ({
    state,
    mutations,
    actions,
    getters
})