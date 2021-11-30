import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
 
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location, onResolve, onReject) {
  if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
  return originalReplace.call(this, location).catch(err => err)
}


// //缓存原本的push方法
// const originalPush = VueRouter.prototype.push
// const originalReplace = VueRouter.prototype.replace
// VueRouter.prototype.push = function(location, onResolve, onReject) {
//     if (onResolve || onReject){
//         return originalPush.call(this, location, onResolve, onReject)  //this是VueRouter.prototype
//     }
//     return originalPush.call(this, location).catch((err) => {
//         if (VueRouter.isNavigationFailure(err)) {
//             return err
//         }
//     return Promise.reject(err)
//   })
// }

// VueRouter.prototype.replace = function(location, onResolve, onReject) {
//     if (onResolve || onReject){
//         return originalReplace.call(this, location, onResolve, onReject)
//     }
//     return originalReplace.call(this, location).catch((err) => {
//         if (VueRouter.isNavigationFailure(err)) {
//             return err
//         }
//     return Promise.reject(err)
//   })
// }

const router = new VueRouter({
    mode:'history',
    routes
})

router.beforeEach((to, from, next) => {
  // ...
  if(to.name === 'shopcart'){
    //console.log('shopcart')
    next()
  }else{
    next()
    //console.log(to.name,from.name)
  }
})

export default router