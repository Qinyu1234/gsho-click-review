import axios from 'axios'

const service = axios.create({
    baseURL:'http://39.99.186.36/api',
    timeout:60000
})

service.interceptors.request.use((config)=>{
    return config
})

service.interceptors.response.use(res=>{
    return res.data
},
error=>{
    return Promise.reject(error)
})

export {
    service
}