//导入第三发模块
import Vue from "vue"
import VueRouter  from "vue-router"
Vue.use(VueRouter)


// 导入css文件
import "./css/index.css"


//导入js 文件
import router from "./router"



//导入.vue文件
import App from "./components/App.vue"



// 创建根组件实例
const vm = new Vue({
    el:"#app",
    render: c => c(App),
    router: router
})