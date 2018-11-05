/*
//引入events 模块
var events = require('events');

//创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();


//绑定事件及事件处理程序
eventEmitter.on('testEvent', function(){
    console.log('事件');
    eventEmitter.emit('log');
});

eventEmitter.on('log', function(){
    console.log('log');
});

//触发事件
eventEmitter.emit('testEvent');
*/

var events = require('events');

var userBean = function(){
    //实力化事件模型
    this.eventEmitter = new events.EventEmitter();

    this.reg = function(username, pwd){
        console.log('注册');
        // console.log(username);
        // console.log(pwd);
        this.eventEmitter.emit('success', username, pwd);
    }

    this.login = function(username, pwd){
        console.log('登录');
        console.log(username);
        console.log(pwd);
        //res.write("登录");
    }

}

module.exports = userBean;







