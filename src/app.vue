<template>
    <div class="main">
       
        <router-view></router-view>
        <div class="footer">
            <div class="footer_list">
                <div><router-link to="message">消息</router-link></div>
                <div><router-link to="address">通讯录</router-link></div>
                <div><router-link to="home">工作台</router-link></div>
                <div><router-link to="mine">我的</router-link></div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            name:"webpack ++++ vue"
        }
    }
}
</script>

<style scoped>
.main>p{
    color: #000;
    font-size: 0.3rem;
}
.footer{
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
}
.footer_list{
    display: flex;
    display: -webkit-flex;
}
.footer_list div{
    width: 33.333%;
    text-align: center;
    background: #fff;
}
.footer_list div a{
    display: inline-block;
    width: 100%;
    height:5rem;
    line-height: 5rem;
    font-size: 1.5rem;
}
</style>


