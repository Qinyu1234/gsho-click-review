import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";
import Detail from "@/pages/Detail";
import ShopCart from "@/pages/ShopCart";
import AddCartSuccess from "@/pages/AddCartSuccess";
import PayAbout from "@/pages/Pay";
import Trade from "@/pages/Trade";
import Test from "@/pages/test";
import Pay from "@/pages/Pay";
import PaySuccess from "@/pages/PaySuccess";
import Center from "@/pages/Center";
import MyOrder from "@/pages/Center/MyOrder";
import GroupOrder from "@/pages/Center/GroupOrder";

export default [
    {
        path:'',
        name:'home',
        component:Home
    },
    {
        name:'login',
        path:'/login',
        component:Login,
        meta:true
    },
    {
        name:'register',
        path:'/register',
        component:Register
    },
    {
        name:'search',
        path:'/search/:keyword?',
        component:Search
    },
    {
        name:'detail',
        path:'/detail/:skuId',
        component:Detail
    },
    {
        name:'shopcart',
        path:'/shopcart',
        component:ShopCart
    },
    {
        name:'addcartsuccess',
        path:'/addcartsuccess',
        component:AddCartSuccess
    },
    {
        name:'payabout',
        path:'/payabout',
        component:PayAbout
    },
    {
        name:'trade',
        path:'/trade',
        component:Trade
    },
    {
        name:'pay',
        path:'/pay',
        component:Pay
    },
    {
        name:'paySuccess',
        path:'/paySuccess',
        component:PaySuccess
    },
    {
        name:'center',
        path:'/center',
        component:Center,
        redirect:'/center/myorder',
        children:[
            {
                name:'myorder',
                path:'myorder',
                component:MyOrder
            },
            {
                name:'groupOrder',
                path:'groupOrder',
                component:GroupOrder
            },
            
        ]
    },
    {
        name:'test',
        path:'/test',
        component:Test,
    }
]