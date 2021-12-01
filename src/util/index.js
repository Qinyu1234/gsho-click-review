import { v4 as uuid } from 'uuid';

export function getUserTempId(){//临时id
    let UserTempId = localStorage.getItem('USER_TEMP_ID_KEY')
    if(UserTempId) return UserTempId
    UserTempId = uuid()
    localStorage.setItem('USER_TEMP_ID_KEY',UserTempId)
    return UserTempId
}

export function getToken(){
    return localStorage.getItem('TOKEN_KEY')
}
export function setToken(token){
    localStorage.setItem('TOKEN_KEY',token)
}
export function removeToken(){
    localStorage.removeItem('TOKEN_KEY')
}
