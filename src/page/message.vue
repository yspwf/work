<template>
    <div class="message">
       

        <router-link to="/detail" class="message_list">
            <div class="headimg">
                <img src="../../static/images/head.png">
            </div>
            <div class="msg">
                <span class="name">哈哈哈</span>
                <span class="content">第三方感受到法国收到过水电费收到过水电费个</span>
            </div>
            <div class="time">
                刚刚
            </div>
        </router-link>



        <router-link to="/detail" class="message_list">
           <div class="headimg">
                <img src="../../static/images/head.png">
            </div>
            <div class="msg">
                <span class="name">哈哈哈</span>
                <span class="content">第三方感受到法国收到过水电费收到过水电费个</span>
            </div>
            <div class="time">
                刚刚
            </div>
        </router-link>
        <router-link to="/detail" class="message_list">
            <div class="headimg">
                <img src="../../static/images/head.png">
            </div>
            <div class="msg">
                <span class="name">哈哈哈</span>
                <span class="content">第三方感受到法国收到过水电费收到过水电费个</span>
            </div>
            <div class="time">
                45分钟前
            </div>
        </router-link>
        <router-link to="/detail" class="message_list">
            <div class="headimg">
                <img src="../../static/images/head.png">
            </div>
            <div class="msg">
                <span class="name">哈哈哈</span>
                <span class="content">第三方感受到法国收到过水电费收到过水电费个</span>
            </div>
            <div class="time">
                3小时以前
            </div>
        </router-link>
        <router-link to="/detail" class="message_list">
            <div class="headimg">
                <img src="../../static/images/head.png">
            </div>
            <div class="msg">
                <span class="name">哈哈哈</span>
                <span class="content">第三方感受到法国收到过水电费收到过水电费个</span>
            </div>
            <div class="time">
                2天以前
            </div>
        </router-link>

         <router-link to="/detail" class="message_list">
            <div class="headimg">
                <img src="../../static/images/head.png">
            </div>
            <div class="msg">
                <span class="name">哈哈哈</span>
                <span class="content">第三方感受到法国收到过水电费收到过水电费个</span>
            </div>
            <div class="time">
                星期一
            </div>
        </router-link>
       
    </div>
</template>


<script>

export default {
    data(){
        return {
            socket:''
        }
    },
    mounted(){
         var vm = this;
        // /*建立socket连接，使用websocket协议，端口号是服务器端监听端口号*/ 
        vm.socket = io('ws://127.0.0.1:8080');
        vm.socket.on('connect', () => {
            console.log('vue中使用socket连接成功！')
            //vm.socket.emit()
        });
        vm.socket.emit('myoperationevent', {name:"34343"});
        vm.socket.on('disconnect', () => {
            console.log('disconnect')
        })
    }
}
</script>

<style>
.message{
    width: 100%;
    background-color: #fff;
}
.message_list{
    display: flex;
    display: -webkit-flex;
    height:6rem;
    border-bottom: 1px solid #e2e2e2;
    padding: 0.5rem 0;
}
.message_list .headimg{
    width:12%;
    padding: 1rem;
    height: 4rem;
}
.message_list .headimg img{
    height: 4rem;
    width: 4rem;
}
.message_list .msg{
    width: 72%;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
}
.message_list .msg span{
    height: 3rem;
}
.message_list .msg .name{
    font-size:1.6rem;
    line-height: 4rem;
}
.message_list .msg .content{
    line-height: 2rem;
    font-size:1rem;
    color: #d4d4d4;
}
.message_list .time{
    width: 15%;
    line-height: 4rem;
    color: #d4d4d4;
}
</style>
