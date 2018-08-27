'use strict';


//引入第三方包 开始
import Vue from 'vue';

//（1）VueRouter:引入路由对象
import VueRouter from 'vue-router';
//VueRouter:安装插件
Vue.use(VueRouter);

//（2）Mint:引入mint-ui
import Mint from 'mint-ui';
//Mint:引入css
import 'mint-ui/lib/style.css';
//Mint:安装插件
Vue.use(Mint);
//MUI:引入mui的样式
import './static/vendor/mui/dist/css/mui.css';
//全局样式
import './static/css/global.css';


//（3）Axios:引入axios
import axios from 'axios';
import VueAxios from 'vue-axios';
//axios.defaults.baseURL = 'http://127.0.0.1:80';
//全局引用axios
Vue.use(VueAxios,axios);
//默认配置

//Moment:引入moment
import Moment from 'moment';

//引入第三方包 结束

//引入全局组件需要的组件对象 开始
import NavBar from './components/common/navBar.vue';
//引入全局组件需要的组件对象 结束

//定义成全局组件或过滤器，大家都能使用 开始
Vue.filter('convertDate',function(value){
    return Moment(value).format('YYYY-MM-DD');
});
Vue.component('navBar',NavBar); //使用最好以nav-bar
//定义全局组件或过滤器 结束

//引入自己的vue文件 开始  
import App from './app.vue';
import Home from './components/home/home.vue';
import Member from './components/member/member.vue';
import Shopcart from './components/shopcart/shopcart.vue';
import Search from './components/search/search.vue';
import NewsList from './components/news/newsList.vue';
import NewsDetail from './components/news/newsDetail.vue';


//引入自己的vue文件 结尾


//VueRouter:创建对象并配置路由规则！！！导航
let router = new VueRouter({
    linkActiveClass:'mui-active',
    routes: [
        //VueRouter：配置路由规则
        { path: '/', redirect: { name: 'home' } }, //重定向
        { name: 'home', path: '/home', component: Home },//首页
        { name:'member',path:'/member',component: Member}, //会员
        { name: 'shopcart',path:'/shopcart',component:Shopcart}, //购物车
        { name: 'search',path:'/search',component:Search}, //查找
        { name:'news.list',path:'/news/list',component:NewsList}, //新闻列表
        { name:'news.detail',path:'/news/detail',component:NewsDetail}, //新闻详情
    ]
});

//创建vue实例
new Vue({
    el: '#app',
    router,
    render: c => c(App)
})