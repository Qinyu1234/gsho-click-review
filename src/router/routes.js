import Home from "@/pages/Home";
import Register from "@/pages/Register";
import Search from "@/pages/Search";
import Detail from "@/pages/Detail";
import ShopCart from "@/pages/ShopCart";

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
    }
]