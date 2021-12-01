import axios from 'axios'
import store from "@/store";

const service = axios.create({
    baseURL:'/mock',
    timeout:20000
})

service.interceptors.request.use((config)=>{
    let token = store.state.userInfo ? store.state.userInfo.token:''
    config.headers.token = token
    return config
})

service.interceptors.response.use(
res=>{
    return res.data
},
error=>{
    return Promise.reject(error)
})

export default service