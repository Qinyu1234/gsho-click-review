import { getToken,setToken } from "@/util/Token.js";
const state = {
    token: getToken(),
    userInfo: {},
    userTempId: getUserTempId(),
    userAddressList: [], // 用户地址
}
const mutations = {
    
}
const actions = {
    
}
const getters = {}

export default ({
    state,
    mutations,
    actions,
    getters
})