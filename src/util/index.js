import { v4 as uuid } from 'uuid';

export function getUserTempId(){//临时id
    let UserTempId = localStorage.getItem('USER_TEMP_ID_KEY')
    if(UserTempId) return UserTempId
    UserTempId = uuid()
    localStorage.setItem('USER_TEMP_ID_KEY',UserTempId)
    return UserTempId
}

export function getToken(){
    
}
export function setToken(){
    
}
export function removeToken(){

}
