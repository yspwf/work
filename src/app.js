import Vue from 'vue';
import App from './app.vue';

import '../static/css/common.css';

//引入路由
import VueRouter from 'vue-router';

Vue.use(VueRouter);


import Home from './page/home.vue';
import Message from './page/message.vue';
import Address from './page/address.vue';
import Mine from './page/mine.vue';

import Detail from './page/detail.vue';

import Integral from './page/integral.vue';
import Exchange from './page/exchange.vue';

import ShippingAddress from './page/shippingaddress.vue';

import Test from './page/test.vue';

const routes = [
    {
        path:'/',
        name:'home',
        component: Home,
        meta:{
            title:'首页',
            index:0
        }
    },
    {
        path:'/home',
        name:'home',
        component: Home,
        meta:{
            title:'首页',
            index:3
        }
    },
 
    {
        path:'/message',
        name:'message',
        component: Message,
        meta:{
            title:"消息",
            index:1
        }
    },
    {
        path:'/address',
        name:'address',
        component: Address,
        meta:{
            title:'通讯录',
            index:2
        }
    },
    {
        path:'/mine',
        name:'mine',
        component: Mine,
        meta:{
            title:'我的',
            index:4
        }
    },
    {
        path:'/detail',
        name:'detail',
        component: Detail,
        meta:{
            title:'详情',
            index:5
        }
    },{
        path:'/integral',
        name:'integral',
        component: Integral,
        meta:{
            title:'积分',
            index:6
        }
    },{
        path:'/exchange',
        name:'exchange',
        component: Exchange,
        meta:{
            title:'兑换',
            index:7
        }
    },{
        path:'/shippingaddress',
        name:'shippingaddress',
        component: ShippingAddress,
        meta:{
            title:'兑换',
            index:7
        }
    },
   
];

const router = new VueRouter({
    mode:'history',
    routes:routes
});


new Vue({
    el:"#app",
    router,
    render:h=>h(App)
});