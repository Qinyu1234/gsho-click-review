<template>
    <div>
        <TypeNav />
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
        }
    }
</script>
<style lang="less" scoped>
</style>