<template>
    <!-- 购物车列表 -->
    <div class="cart">
        <h4>全部商品</h4>
        <div class="cart-main">
            <div class="cart-th">
            <div class="cart-th1">全部</div>
            <div class="cart-th2">商品</div>
            <div class="cart-th3">单价（元）</div>
            <div class="cart-th4">数量</div>
            <div class="cart-th5">小计（元）</div>
            <div class="cart-th6">操作</div>
            </div>
            <div class="cart-body">

                <ul class="cart-list" v-for="(cart,index) in cartList" :key="index">
                    <li class="cart-list-con1">
                    <input :checked="cart.isChecked === 1" @change="updataCart(index)" type="checkbox" name="chk_list">
                    </li>
                    <li class="cart-list-con2">
                    <img :src="cart.imgUrl">
                    <div class="item-msg">{{cart.skuName}}增强</div>
                    </li>
                    <li class="cart-list-con3">
                    <div class="item-txt">语音升级款</div>
                    </li>
                    <li class="cart-list-con4">
                    <span class="price">{{cart.cartPrice}}</span>
                    </li>
                    <li class="cart-list-con5">
                    <a href="javascript:void(0)" class="mins" @click="updataCart(index,1,-1)">-</a>
                    <input autocomplete="off" type="text" :value="cart.skuNum" @change="updataCart(index,1,0,$event.target.value)"  minnum="1" class="itxt">
                    <a href="javascript:void(0)" class="plus" @click="updataCart(index,1,1)">+</a>
                    </li>
                    <li class="cart-list-con6">
                    <span class="sum">{{cart.sumNum}}</span>
                    </li>
                    <li class="cart-list-con7">
                    <a href="#none" class="sindelet">删除</a>
                    <br>
                    <a href="#none">移到收藏</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="cart-tool">
            <div class="select-all">
            <input v-model="isAllCheck" class="chooseAll" type="checkbox">
            <span >全选</span>
            </div>
            <div class="option">
            <a href="#none">删除选中的商品</a>
             <!-- @click="delCart" -->
            <a href="#none">移到我的关注</a>
            <a href="#none">清除下柜商品</a>
            </div>
            <div class="money-box">
            <div class="chosed">已选择
                <span>{{isCheckedNum}}</span>件商品</div>
            <div class="sumprice">
                <em>总价（不含运费） ：</em>
                <i class="summoney">{{allMoney}}</i>
            </div>
            <div class="sumbtn">
                <a class="sum-btn" href="###" target="_blank">结算</a>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
    export default {
        name:'ShopCart',
        data(){
            return{
                skuNum:1,
            }
        },
        mounted(){
            this.getCartList()
        },
        computed:{
            ...mapState({
                cartList:state=>state.shopcart.cartList || []
            }),
            isAllCheck:{
              get(){
                return this.cartList.every(item => {
                  return item.isChecked
                })
              },
              set(value){
                this.cartList.forEach(item => {
                  item.isChecked = value === true ?1:0
                });
              }
            },
            isCheckedNum(){
              return this.cartList.reduce((prev,item)=>{
                  if(item.isChecked){
                    prev++
                  }
                  return prev
              },0)
            },
            allMoney(){
              return this.cartList.reduce((prev,item) =>{
                   if(item.isChecked){
                     prev += item.skuNum * item.cartPrice
                   }
                   return prev
              },0)
            }
        },
        methods:{
            getCartList(){
              this.$store.dispatch('getCartList')
            },
            updataCart(index,flag = 0,sflag = 0,value = ''){
                let {cartList} = this
                console.log(value)
                //0 代表checked
                if(flag === 0){
                    cartList[index].isChecked = cartList[index].isChecked === 1 ? 0:1
                }else{
                    //代表修改数量
                    if(sflag === 0){
                        cartList[index].skuNum = value > 0? parseInt(value):0
                    }else{
                        cartList[index].skuNum = cartList[index].skuNum + sflag >= 0?cartList[index].skuNum + sflag:0
                    }
                }
            },
            // delCart(){
            //   let carts = this.cartList.filter(item =>item.isChecked === 0)
            //   this.cartList = carts
            //   console.log('delCart',this.cartList,ss)
            // }
        }
    }
</script>

<style lang="less" scoped>
  .cart {
    width: 1200px;
    margin: 0 auto;

    h4 {
      margin: 9px 0;
      font-size: 14px;
      line-height: 21px;
    }

    .cart-main {
      .cart-th {
        background: #f5f5f5;
        border: 1px solid #ddd;
        padding: 10px;
        overflow: hidden;

        &>div {
          float: left;
        }

        .cart-th1 {
          //width: 25%;
          width: 15%;

          input {
            vertical-align: middle;
          }

          span {
            vertical-align: middle;
          }
        }

        .cart-th2 {
          // width: 25%;
          width: 35%;
        }

        // .cart-th3,
        // .cart-th4,
        // .cart-th5,
        // .cart-th6 {
        //   width: 12.5%;

        // }
        .cart-th3{
          width:10%
        }
        .cart-th4{
          width:17%
        }
        .cart-th5{
          width:10%
        }
        .cart-th6{
          width:13%
        }
      }

      .cart-body {
        margin: 15px 0;
        border: 1px solid #ddd;

        .cart-list {
          padding: 10px;
          border-bottom: 1px solid #ddd;
          overflow: hidden;

          &>li {
            float: left;
          }

          .cart-list-con1 {
            // width: 4.1667%;
            width: 15%;
          }

          .cart-list-con2 {
            // width: 25%;
            width: 35%;

            img {
              width: 82px;
              height: 82px;
              float: left;
            }

            .item-msg {
              float: left;
              width: 150px;
              margin: 0 10px;
              line-height: 18px;
            }
          }
          .cart-list-con4 {
            //width: 12.5%;
            width: 10%;
            

          }

          .cart-list-con5 {
            // width: 12.5%;
            width: 17%;

            .mins {
              border: 1px solid #ddd;
              border-right: 0;
              float: left;
              color: #666;
              width: 6px;
              text-align: center;
              padding: 8px;
            }

            input {
              border: 1px solid #ddd;
              width: 40px;
              height: 33px;
              float: left;
              text-align: center;
              font-size: 14px;
            }

            .plus {
              border: 1px solid #ddd;
              border-left: 0;
              float: left;
              color: #666;
              width: 6px;
              text-align: center;
              padding: 8px;
            }
          }

          .cart-list-con6 {
            // width: 12.5%;
            width: 10%;
            

            .sum {
              font-size: 16px;
            }
          }

          .cart-list-con7 {
            width: 13%;
            // width: 12.5%;

            a {
              color: #666;
            }
          }
        }
      }
    }

    .cart-tool {
      overflow: hidden;
      border: 1px solid #ddd;

      .select-all {
        padding: 10px;
        overflow: hidden;
        float: left;

        span {
          vertical-align: middle;
        }

        input {
          vertical-align: middle;
        }
      }

      .option {
        padding: 10px;
        overflow: hidden;
        float: left;

        a {
          float: left;
          padding: 0 10px;
          color: #666;
        }
      }

      .money-box {
        float: right;

        .chosed {
          line-height: 26px;
          float: left;
          padding: 0 10px;
        }

        .sumprice {
          width: 200px;
          line-height: 22px;
          float: left;
          padding: 0 10px;

          .summoney {
            color: #c81623;
            font-size: 16px;
          }
        }

        .sumbtn {
          float: right;

          .sum-btn{
            display: block;
            position: relative;
            width: 96px;
            height: 52px;
            line-height: 52px;
            color: #fff;
            text-align: center;
            font-size: 18px;
            font-family: "Microsoft YaHei";
            background: #e1251b;
            overflow: hidden;
          }
        }
      }
    }
  }
</style>