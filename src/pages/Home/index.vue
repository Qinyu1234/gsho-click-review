<template>
    <div>
        <TypeNav :categoryList="categoryList"/>
        <ListContainer/>
        <TodayRecommend/>
        <Rank/>
        <Like/>
        <Floor/>
        <Brand/>
    </div>
</template>
<script>
import Brand from './Brand'
import Floor from './Floors'
import Like from './Like'
import ListContainer from './ListContainer'
import Rank from './Rank'
import TodayRecommend from './TodayRecommend'
import { mapState } from "vuex";
    export default {
        name:'Home',
        components:{
            Brand,
            Floor,
            Like,
            ListContainer,
            Rank,
            TodayRecommend
        },
        mounted(){
            this.$store.dispatch('getBannerList')
            this.$store.dispatch('getRecommends')
            this.$store.dispatch('getFloors')
            this.$store.dispatch('getBrands')
        },
        computed:{
            ...mapState({
                categoryList: state => state.home.categoryList
            })
        }
    }
</script>
<style lang="less" scoped>
</style>