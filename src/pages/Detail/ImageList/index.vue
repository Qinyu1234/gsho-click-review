<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide 
      v-for="(skuImage,index) in skuImageList" :key="index"
    >
      <img 
      @click="defaultIndex(index)"
      :class="{active:showIndex === index}"
      :src="skuImage.imgUrl">
    </swiper-slide>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
  
  <!-- <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="/images/detail/s1.png">
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div> -->
</template>

<script>
  export default {
    name: "ImageList",
    props:['skuImageList'],
    data(){
      return{
        showIndex:0,
        swiperOption: {
          slidesPerView: 7,
          slidesPerGroup:7,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },
    methods:{
      defaultIndex(index){
        this.showIndex = index
        this.$bus.$emit('defaultIndex',this.showIndex)
      }
      
    }
  }
</script>

<style lang="less" scoped>
  .swiper-container {
    height: 56px;
    width: 412px;
    box-sizing: border-box;
    padding: 0 12px;

    .swiper-slide {
      // width: 56px;
      // height: 56px;
     
      
      img {
        width: 100%;
        height: 100%;
        border: 1px solid #ccc;
        padding: 2px;
        width: 50px;
        height: 50px;
        display: block;

        &.active {
          border: 2px solid #f60;
          padding: 1px;
        }
      }
    }

    .swiper-button-next {
      left: auto;
      right: 0;
    }

    .swiper-button-prev {
      left: 0;
      right: auto;
    }

    .swiper-button-next,
    .swiper-button-prev {
      box-sizing: border-box;
      width: 12px;
      height: 56px;
      background: rgb(235, 235, 235);
      border: 1px solid rgb(204, 204, 204);
      top: 0;
      margin-top: 0;
      &::after {
        font-size: 12px;
      }
    }
  }
</style>