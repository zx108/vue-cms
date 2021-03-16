//导入Vue
import Vue from "vue"

//导入mui的css样式
import "../lib/mui/css/mui.min.css"
//导入mui 扩展的css样式
import "../lib/mui/css/icons-extra.css"


//导入 Mint-UI
import Mint from 'mint-ui';
Vue.use(Mint);
//导入Mint-UI样式
import 'mint-ui/lib/style.css'

//导入 vue-router
import VueRouter  from "vue-router"
Vue.use(VueRouter)



// 导入全局css文件
import "./css/index.css"


//导入自定义组件路由js 文件
import router from "./router"



//导入 根组件文件
import App from "./components/App.vue"





// 创建根组件实例
const vm = new Vue({
    el:"#app",
    render: c => c(App),
    router: router
})