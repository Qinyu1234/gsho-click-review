<template>
    <!-- 头部 -->
    <header class="header">
        <!-- 头部的第一行 -->
        <div class="top">
            <div class="container">
                <div class="loginList">
                    <p>尚品汇欢迎您！</p>
                        <div v-if="!succ.name" style="display:inline-block">
                            <p>
                                <span>请</span>
                                <router-link to="/login">登录</router-link>
                                <router-link to="/register" class="register">免费注册</router-link>
                            </p>
                        </div>
                        <div v-else style="display:inline-block">
                            <p>
                                <span>{{succ.name}}</span>
                                <a href="#" style="margin-left:3px" @click="outLogin">| 退出</a>
                            </p>
                        </div>
                </div>
                <div class="typeList">
                    <!-- <a href="###">我的订单</a> -->
                    <router-link to="/center">我的订单</router-link>
                    <!-- <a href="###"></a> -->
                    <router-link to="/shopcart">我的购物车</router-link>
                    <a href="###">我的尚品汇</a>
                    <a href="###">尚品汇会员</a>
                    <a href="###">企业采购</a>
                    <a href="###">关注尚品汇</a>
                    <a href="###">合作招商</a>
                    <a href="###">商家后台</a>
                </div>
            </div>
        </div>
        <!--头部第二行 搜索区域-->
        <div class="bottom" >
            <h1 class="logoArea">
                <!-- <a class="logo" title="尚品汇" href="###" target="_blank"></a> -->
                <router-link class="logo" title="尚品汇" to="/" >
                    <img src="/images/home/logo.png" alt="">
                </router-link>
            </h1>
            <div class="searchArea" v-if="$route.meta !== true">
                <form action="###" class="searchForm">
                    <input type="text" id="autocomplete" v-model.trim="keyword" class="input-error input-xxlarge" />
                    <button class="sui-btn btn-xlarge btn-danger" @click.prevent="search" type="button">搜索</button>
                </form>
            </div>
        </div>
    </header>
</template>
<script>
import { mapGetters } from 'vuex'
    export default {
        name:'Header',
        data(){
            return{
                keyword:''
            }
        },
        mounted(){
            this.$bus.$on('clearKeyword',()=>{this.keyword = ''})
        },
        computed:{
            ...mapGetters(['succ'])
        },
        methods:{
            search(){
                const keyword = this.keyword
                const location = {
                    name:'search',
                    params:{
                        keyword
                    }
                }
                location.query = this.$route.query

                if (this.$route.name === "search") {
                    this.$router.replace(location);
                } else {
                    this.$router.push(location);
                }
            },
            outLogin(){
                this.$store.dispatch('outLogin')
            }
        }
    }
</script>
<style lang="less" scoped>
.header {
        &>.top {
            background-color: #eaeaea;
            height: 30px;
            line-height: 30px;

            .container {
                width: 1200px;
                margin: 0 auto;
                overflow: hidden;

                .loginList {
                    float: left;

                    p {
                        float: left;
                        margin-right: 10px;

                        .register {
                            border-left: 1px solid #b3aeae;
                            padding: 0 5px;
                            margin-left: 5px;
                        }
                    }
                }

                .typeList {
                    float: right;

                    a {
                        padding: 0 10px;

                        &+a {
                            border-left: 1px solid #b3aeae;
                        }
                    }

                }

            }
        }

        &>.bottom {
            width: 1200px;
            margin: 0 auto;
            overflow: hidden;

            .logoArea {
                float: left;

                .logo {
                    img {
                        width: 175px;
                        margin: 25px 45px;
                    }
                }
            }

            .searchArea {
                float: right;
                margin-top: 35px;

                .searchForm {
                    overflow: hidden;

                    input {
                        box-sizing: border-box;
                        width: 490px;
                        height: 32px;
                        padding: 0px 4px;
                        border: 2px solid #ea4a36;
                        float: left;

                        &:focus {
                            outline: none;
                        }
                    }

                    button {
                        height: 32px;
                        width: 68px;
                        background-color: #ea4a36;
                        border: none;
                        color: #fff;
                        float: left;
                        cursor: pointer;

                        &:focus {
                            outline: none;
                        }
                    }
                }
            }
        }
    }
</style>