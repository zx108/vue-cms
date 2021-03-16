import VueRouter from "vue-router"


// 导入组件
import login from "./components/account/login.vue"
import reg from "./components/account/reg.vue"

const router = new VueRouter({
    routes: [
        {path: '/',component: login},
        {path: '/login',component: login},
        {path: '/reg',component: reg}
    ]
})

export default router