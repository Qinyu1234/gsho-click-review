<template>
  <div class="spec-preview">
    <img v-if="skuImageList[defaultIndex]"  :src="skuImageList[defaultIndex].imgUrl" />
    <div  class="event" @mousemove="showBigimg"></div>
    <div class="big">
      <img ref="bigImg" v-if="skuImageList[defaultIndex]" :src="skuImageList[defaultIndex].imgUrl" />
    </div>
    <div ref="mask" class="mask"></div>
  </div>
</template>

<script>
  export default {
    name: "Zoom",
    data(){
      return{
        defaultIndex:0,
      }
    },
    props:['skuImageList'],
    mounted(){
        this.$bus.$on('defaultIndex',(index) =>{
         this.defaultIndex = index
        }) 
    },
    methods:{
      showBigimg(event){
        let mouseX = event.offsetX
        let mouseY = event.offsetY

        let maskDiv = this.$refs.mask
        let maskX = mouseX- maskDiv.offsetWidth/2
        let maskY = mouseY- maskDiv.offsetHeight/2

        let bigImgDiv = this.$refs.bigImg

        if(maskX < 0){
          maskX = 0
        }else if(maskX > maskDiv.offsetWidth){
          maskX = maskDiv.offsetWidth
        }

        if(maskY < 0){
          maskY = 0
        }else if(maskY > maskDiv.offsetHeight){
          maskY = maskDiv.offsetHeight
        }

        maskDiv.style.left = maskX +'px'
        maskDiv.style.top = maskY +'px'

        bigImgDiv.style.left = -2*maskX +'px'
        bigImgDiv.style.top = -2*maskY +'px'
      }
    }

  }
</script>

<style lang="less">
  .spec-preview {
    position: relative;
    width: 400px;
    height: 400px;
    border: 1px solid #ccc;

    img {
      width: 100%;
      height: 100%;
    }

    .event {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 998;
    }

    .mask {
      width: 50%;
      height: 50%;
      background-color: rgba(0, 255, 0, 0.3);
      position: absolute;
      left: 0;
      top: 0;
      display: none;
    }

    .big {
      width: 100%;
      height: 100%;
      position: absolute;
      top: -1px;
      left: 100%;
      border: 1px solid #aaa;
      overflow: hidden;
      z-index: 998;
      display: none;
      background: white;

      img {
        width: 200%;
        max-width: 200%;
        height: 200%;
        position: absolute;
        left: 0;
        top: 0;
      }
    }

    .event:hover~.mask,
    .event:hover~.big {
      display: block;
    }
  }
</style>