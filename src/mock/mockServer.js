
/*
 利用mockjs提供mock接口
*/
import Mock from 'mockjs'
import navtype from './navtype.json'
import banners from './banners.json'
import recommends from './recommends.json'
import floors from './floors.json'
import brands from './brand.json'
import search  from './search.json'
import detail  from './detail.json'
import cartList  from './cartList.json'

// 
// 
// import login  from './login.json'
// import page  from './page.json'
// import trade  from './trade.json'

//mock不需要暴露对象
Mock.mock('/mock/categoryList',{code:200,data:navtype})
Mock.mock('/mock/bannerList',{code:200,data:banners})
Mock.mock('/mock/recommends',{code:200,data:recommends})
Mock.mock('/mock/floors',{code:200,data:floors})
Mock.mock('/mock/brands',{code:200,data:brands})
Mock.mock('/mock/searchList',{code:200,data:search})
Mock.mock('/mock/detail/:skuId',{code:200,data:detail})
Mock.mock(`/mock/addOrUpdataCart/:skuId/:skuNum`,{code:200,data:null})
Mock.mock(`/mock/cart/cartList`,{code:200,data:cartList})

// Mock.mock(`/mock/register`,{code:200,data:null})
// Mock.mock(`/mock/login`,{code:200,data:login})
// Mock.mock(`/mock/order/auth/trade`,{code:200,data:trade})

// Mock.mock(`/mock/order/auth/:page/:limit`,{code:200,data:page})
