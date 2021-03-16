import VueRouter from "vue-router"


// 导入组件
import HomeContainer from "./components/tabbar/HomeContainer.vue"
import MemberContainer from "./components/tabbar/MemberContainer.vue"
import ShopcarContainer from "./components/tabbar/ShopcarContainer.vue"
import SearchContainer from "./components/tabbar/SearchContainer.vue"



const router = new VueRouter({
    routes: [
        { path: "/", redirect: "/home"},
        { path: "/home", component: HomeContainer},
        { path: "/member", component: MemberContainer},
        { path: "/shopcar", component: ShopcarContainer},
        { path: "/search", component: SearchContainer}
    ],
    linkActiveClass: "mui-active"
})

export default router