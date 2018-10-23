<template>
    <div class="login">
        <div class="logo">logo</div>
        <div class="form">
            <ul>
                <li><span>logo</span><input type="text" name="phone" v-model="userinfo.username" placeholder="手机号码"></li>
                <li><span>logo</span><input type="password" name="name" v-model="userinfo.password" placeholder="昵称"></li>
                <li class="loginbtn"><button @click="login">登录/手机验证码</button></li>
            </ul>
        </div>
        <div class="otherlogin">
            <router-view to="/">账号登录</router-view>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            userinfo:{
                username:'',
                password:'',
            }
        }
    },
    methods:{
        login:function(){
           console.log(this.userinfo);
           this.$http({
               method:'post',
               url:'http://127.0.0.1:5656/user/login',
               data:this.userinfo
           }).then(function(response){
               console.log(response);
           }).catch(function(error){
               console.log(error);
           });
        }
    }
}
</script>


<style>
.login{
    width: 80%;
    padding:5% 10%;
}
.logo{
    width:100%;
    height: 10rem;
    text-align: center;
}
.form ul li{
    display: flex;
    display: -webkit-flex;
    border-radius: 1rem;
    height:4.2rem;
    border:1px solid #999;
    margin-bottom: 2rem;
}
.form ul li span{
    height: 4rem;
    width: 15%;
    text-align: center;
    line-height: 4rem;
    border:none;
    margin-top: 0.1rem;
    border-radius: 1rem 0 0 1rem;
    background-color: #fff;
    padding-left: 0.1rem;
}
.form ul li input{
    height:4rem;
    width:85%;
    margin-top: 0.1rem;
    font-size:1.5rem;
    text-indent: 1rem;
    border:none;
     border-radius:0 1rem 1rem 0;
    outline: none;
}

.form ul li button{
    height: 4rem;
    width: 100%;
    border: none;
    background: #5d93f9;
    font-size: 1.5rem;
    border-radius: 1rem;
    color:#fff;
    outline:none;
    cursor: pointer;
}
.form ul .loginbtn{
    border:none;
}
</style>

