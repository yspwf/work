<template>
    <div class="detail">
       <div id="detail">
           <!--
            <div class="say">
                    <div class="person">
                    <img src="../../static/images/head.png">
                    </div>
                    <div class="content">
                    <span class="name">哈哈哈</span>
                    <div class="contents">对方公司大股东十多个  http://www.baidu.com  对方公司大股东十多个  http://www.baidu.com对方公司大股东十多个  http://www.baidu.com对方公司大股东十多个  http://www.baidu.com对方公司大股东十多个  http://www.baidu.com</div>
                    </div>
            </div>

            <div class="say">
                    <div class="person">
                    <img src="../../static/images/head.png">
                    </div>
                    <div class="content">
                    <span class="name">哈哈哈</span>
                    <div class="contents">对方公司大股东十多个  http://www.baidu.com  对方aidu.com对方公司大股东个  http://www.baidu.com</div>
                    </div>
            </div>

            <div class="say">
                    <div class="person">
                    <img src="../../static/images/head.png">
                    </div>
                    <div class="content">
                    <span class="name">哈哈哈</span>
                    <div class="contents">对方公司大股东十多个  http://www.baidu.com  对方公司大股东十多个  http://www.baidu.com对方公司大股东十多个  http://www.baidu.com对方公司大股东十多个  http://www.baidu.com对方公司大股东十多个  http://www.baidu.com</div>
                    </div>
            </div>


            <div class="say self">
                    <div class="content">
                    <span class="name selfname">哈哈哈</span>
                    <div class="contents">对方公司大股东十多个  http://www.baidu.com  十多个  http://www.baidu.com对方公司大股东十多个  http://www.baidu.com对方公司大股东十多个  http://www.baidu.com</div>
                    </div>
                    <div class="person selfperson">
                    <img src="../../static/images/head.png">
                    </div>
            </div>

            <div class="say self">
                    <div class="content">
                    <span class="name selfname">哈哈哈</span>
                    <div class="contents">对方公司大股东十多个  http://www.baidu.com  十多个  http://www.baidu.com对方公司大股东十多个  http://www.baidu.com对方公司大股东十多个  http://www.baidu.com</div>
                    </div>
                    <div class="person selfperson">
                    <img src="../../static/images/head.png">
                    </div>
            </div>
            -->
       </div>
       <div class="message">
           <textarea name="" id="msg" v-model="message"></textarea>
           <input type="button" @click="send" id="btn" value="发送" />
       </div>
    </div>
</template>


<script>
let socket = io('ws://127.0.0.1:8080');
export default {
    data(){
        return {
            message:''
        }
    },
    mounted(){
        // var vm = this;
        // // /*建立socket连接，使用websocket协议，端口号是服务器端监听端口号*/ 
        // vm.socket = io('ws://127.0.0.1:8080');
        // vm.socket.on('connect', () => {
        //     console.log('vue中使用socket连接成功！')
        //     //vm.socket.emit()
        // });
        // vm.socket.emit('sendMessage', {name:"点点",msg:"这是一条消息"});
       
        // vm.socket.on('receiveMessage',function(data){
        //     let msg = document.getElementById("detail");
        //     var div = document.createElement('div');
        //     div.className = "say self";
        //     var html = '<div class="content"><span class="name selfname">'+data.name+'</span><div class="contents">'+data.msg+'</div></div><div class="person selfperson"><img src="../../static/images/head.png"></div>';
        //     div.innerHTML = html;
        //     msg.appendChild(div);
        // });
        
        
        // vm.socket.on('disconnect', () => {
        //     console.log('disconnect')
        // });

        socket = io('ws://127.0.0.1:8080');
        socket.on('connect', () => {
            console.log('vue中使用socket连接成功！')
            //vm.socket.emit()
        });
        socket.on('receiveMessage', function(data){
            console.log(data);
            let msg = document.getElementById("detail");
            var div = document.createElement('div');
            div.className = "say self";
            var html = '<div class="content"><span class="name selfname">'+data.name+'</span><div class="contents">'+data.msg+'</div></div><div class="person selfperson"><img src="../../static/images/head.png"></div>';
            div.innerHTML = html;
            msg.appendChild(div);
        });
    },
    methods:{
        send:function(){
            let msgstr = this.message;
            socket.emit('sendMessage',{name:'花花',msg:msgstr});
            this.message = '';
        }
    }
}
</script>

<style>
.detail{
    width: 100%;
    background-color: #fff;
    padding-bottom: 10rem;
}
.say{
    display: flex;
    display: -webkit-flex;
    padding: 1rem;
}
.say .person{
    width: 10%;
    height:3rem;
   
}

.say .person img{
    width: 3rem;
    height: 3rem;
}
.say .content{
    width: 78%;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    padding: 0 0.5rem;
}
.say .content .name{
    font-size: 1rem;
    height: 1.5rem;
    line-height: 1.5rem;
}
.say .content .contents{
    margin-top:0.5rem;
    padding: 0.5rem 0.8rem;
    border:1px solid #dadada;
    border-radius: 0.8rem;
    line-height: 1.5rem;
    font-size: 1rem;
    width: 93%;
}

.self{
    justify-content: flex-end;
}

.self .selfname{
    padding: 0 0.5rem;
    text-align: right;
}
.self .selfperson{
    display: flex;
    display: -webkit-flex;
    justify-content: flex-end;
    width: 9%;
}
.message{
    width: 100%;
    height:3rem;
    margin-bottom: 3rem;
}
#msg{
    width:80%;
    margin: 0 0 0 1rem;
    height:5.5rem;
}
#btn{
    height:4rem;
    width:15%;
}
</style>
