//#region Vuex
    import Vuex from 'vuex'
    import Vue from 'vue'
    Vue.use(Vuex)
    export default new Vuex.Store({
        state:{},
        mutations:{},
        actions:{},
        getters:{},
        modules:{
            home,
            xxx
        }
    })
//#endregion

//#region 路由store
    import VueRouter from 'vue-router'
    Vue.use(VueRouter)
    export default new VueRouter({
        mode:'history',
        routes
    })
//#endregion

//#region  
    // 生命周期钩子
        beforeMount		//vm挂载前	dom未挂载
        //用的最多,发ajax请求获取数据/开启定时器/添加一些时间
        mounted			//vm挂载后	dom已经挂载	
            // mounted(){ this.$store.dispatch('xx') }
        beforeDestroy	//销毁前

    //计算
        computed
            //...mapState
        watch

    // 其他生命周期钩子
        // beforeCreate	//初始化前	数据未形成
        // created			//初始化后	数据形成了
        // //vm数据已经更新,页面还未更新
        // beforeUpdate	//页面渲染前 不是vm数据
        // updated			//页面渲染后 不是vm数据
        // destroyed		//销毁后
//#endregion
