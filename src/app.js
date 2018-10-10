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

const routes = [
    {
        path:'/',
        name:'home',
        component: Home
    },
    {
        path:'/home',
        name:'home',
        component: Home
    },
    {
        path:'/message',
        name:'message',
        component: Message
    },
    {
        path:'/address',
        name:'address',
        component: Address
    },
    {
        path:'/mine',
        name:'mine',
        component: Mine
    }
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