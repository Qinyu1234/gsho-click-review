import Home from "@/pages/Home";
import Register from "@/pages/Register";
import Search from "@/pages/Search";
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
    }
]