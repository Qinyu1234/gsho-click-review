<template>
    <!-- 商品分类导航 -->
    <div class="type-nav">
        <div class="container">
            <div @mouseleave="hideFirst" @mouseenter="showFirst">
                <h2 class="all" >全部商品分类</h2>
                <div class="sort" v-show="isShow" >
                    <div class="all-sort-list2"  @mouseleave="currentIndex = -1">
                        <div 
                            class="item" 
                            v-for="(category,index) in categoryList" 
                            :key="index"
                            :class="{active:currentIndex === index}"
                            @mouseenter="showSubList(index)"
                            @click='toSearch'
                        >
                            <h3>
                                <a href="#" :data-categoryName="category.categoryName">
                                    {{category.categoryName}}
                                </a>
                            </h3>
                            <div class="item-list clearfix" v-show="currentIndex === index">
                                <div class="subitem">
                                    <dl class="fore" v-for="items in category.categoryChild" :key="items.categoryId">
                                        <dt>
                                            <a :data-categoryName="items.categoryName" href="#">{{items.categoryName}}</a>
                                        </dt>
                                        <dd>
                                            <em v-for="item in items.categoryChild" :key="item.categoryId">
                                                <a :data-categoryName="items.categoryName" href="#">{{item.categoryName}}</a>
                                            </em>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="nav">
                <a href="###">服装城</a>
                <a href="###">美妆馆</a>
                <a href="###">尚品汇超市</a>
                <a href="###">全球购</a>
                <a href="###">闪购</a>
                <a href="###">团购</a>
                <a href="###">有趣</a>
                <a href="###">秒杀</a>
            </nav>
        </div>
    </div>
</template>
<script>
import  throttle  from "lodash/throttle";
import  {mapState}  from "vuex";
    export default {
        name:'TypeNav',
        data(){
            return{
                isShow:this.$route.path === '/',
                currentIndex:-2,
            }
        },
        computed:{
            ...mapState({
                categoryList: state => state.home.categoryList
            })
        },
        methods:{
            showFirst(){
                this.isShow = true
            },
            hideFirst(){
                if(this.$route.path !== '/'){
                    this.isShow = false
                }
            },
            showSubList:throttle(
                function (index){
                    this.currentIndex = index
                },200,{
                    // leading :false,
                    // trailing:false
            }),
            toSearch(event){
                let categoryName = ''
                const target = event.target
                if(target.tagName.toUpperCase() === 'A'){
                   categoryName = target.dataset.categoryname
                }
                const location = {
                    name:'search',
                    query:{
                        categoryName
                    }
                }
                location.params = this.$route.params
                if(this.$router.path !== '/search'){
                    this.$router.push(location)
                }else{
                    this.$router.reolace(location)
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .type-nav {
        border-bottom: 2px solid #e1251b;
        
        .container {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            position: relative;

            .all {
                width: 210px;
                height: 45px;
                background-color: #e1251b;
                line-height: 45px;
                text-align: center;
                color: #fff;
                font-size: 14px;
                font-weight: bold;
            }

            .nav {
                a {
                    height: 45px;
                    margin: 0 22px;
                    line-height: 45px;
                    font-size: 16px;
                    color: #333;
                }
            }

            .sort {
                position: absolute;
                left: 0;
                top: 45px;
                width: 210px;
                height: 461px;
                position: absolute;
                background: #fafafa;
                z-index: 999;

                .all-sort-list2 {
                    .item {
                        h3 {
                            line-height: 30px;
                            font-size: 14px;
                            font-weight: 400;
                            overflow: hidden;
                            padding: 0 20px;
                            margin: 0;

                            a {
                                color: #333;
                            }
                        }

                        .item-list {
                            display: none;
                            position: absolute;
                            width: 734px;
                            min-height: 460px;
                            background: #f7f7f7;
                            left: 210px;
                            border: 1px solid #ddd;
                            top: 0;
                            z-index: 9999 !important;

                            .subitem {
                                float: left;
                                width: 650px;
                                padding: 0 4px 0 8px;

                                dl {
                                    border-top: 1px solid #eee;
                                    padding: 6px 0;
                                    overflow: hidden;
                                    zoom: 1;

                                    &.fore {
                                        border-top: 0;
                                    }

                                    dt {
                                        float: left;
                                        width: 54px;
                                        line-height: 22px;
                                        text-align: right;
                                        padding: 3px 6px 0 0;
                                        font-weight: 700;
                                    }

                                    dd {
                                        float: left;
                                        width: 415px;
                                        padding: 3px 0 0;
                                        overflow: hidden;

                                        em {
                                            float: left;
                                            height: 14px;
                                            line-height: 14px;
                                            padding: 0 8px;
                                            margin-top: 5px;
                                            border-left: 1px solid #ccc;
                                        }
                                    }
                                }
                            }
                        }

                        &.active{
                            background-color: wheat;
                            .item-list {
                                display: block;
                            }
                        }
                    }
                    
                }
            }
        }
    }
</style>