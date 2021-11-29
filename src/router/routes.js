import Home from "@/pages/Home";
import Register from "@/pages/Register";
import Search from "@/pages/Search";
import Detail from "@/pages/Detail";
import ShopCart from "@/pages/ShopCart";
import AddCartSuccess from "@/pages/AddCartSuccess";
import PayAbout from "@/pages/Pay";
import Trade from "@/pages/Trade";
import Test from "@/pages/test";
import Pay from "@/pages/Pay";

export default [
    {
        path:'',
        name:'home',
        component:Home
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
        name:'test',
        path:'/test',
        component:Test
    }
]