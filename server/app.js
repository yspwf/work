// const Koa = require('koa');
// const app = new Koa();



// //引入 koa-router
// const KoaRouter = require('koa-router');
// const router = new KoaRouter();


// //cors是一个w3c标准，全称为“跨域资源共享” (cross-origin resource sharing)
// var cors = require('koa2-cors');

// app.use(cors({
//     //origin:'*',
//     origin:function (ctx) {
//         //return "*";
        
//         // if (ctx.url === '/cors') {
//         //     return "*"; // 允许来自所有域名请求
//         // }
//         return 'http://localhost:5051';
        
//     },
//     exposeHeaders:['WWW-Authenticate','Server-Authorization'],
//     maxAge:360,
//     credentials: true,
//     allowMethods: ['GET','POST','DELETE'],
//     allowHeaders: ['Content-Type', 'Authorization','Accept']
// }));



// //引入post 数据解析模块
// const bodyparser = require('koa-bodyparser');
// app.use(bodyparser());

// //引入mysql 操作类
// const db = require("./mysql.js");

// //引入加密操作类 crypto
// const md5 = require('md5');








// router.get("/",(ctx, next)=>{
//     ctx.body = "234234234";
// });

// router.post("/user/login",async (ctx, next)=>{
//     const info = ctx.request.body;
//    console.log(md5(info.password));
//     let result = await db.query('select * from user where age=20');
//     ctx.body = result;
//     //console.log("post login");
// });


// app.use(router.routes()).use(router.allowedMethods());

// /*

// app.use(ctx => {
//     ctx.body = "hello koa !!!";
// });
// */
// app.listen(5656, function(){
//     console.log('server is started !!!');
// });


// let server = require('http').createServer(app.callback())
// let io = require('socket.io')(server)

// io.sockets.on('connection', socket => {
//     console.log('connect')
//     socket.on('disconnect', () => {
//       console.log('disconnect')
//     })
//     socket.disconnect()
//   })




// var app = require('koa')();
//   var cors = require('koa2-cors');
//   app.use(cors({
//       //origin:'*',
//       origin:function (ctx) {
//           //return "*";
          
//           // if (ctx.url === '/cors') {
//           //     return "*"; // 允许来自所有域名请求
//           // }
//           return 'http://localhost:5051';
          
//       },
//       exposeHeaders:['WWW-Authenticate','Server-Authorization'],
//       maxAge:360,
//       credentials: true,
//       allowMethods: ['GET','POST','DELETE'],
//       allowHeaders: ['Content-Type', 'Authorization','Accept']
//   }));

//   var server = require('http').createServer(app);
// var io = require('socket.io')(server);

// server.listen(5656);


//   io.on('connection', socket => {
//     console.log('connect')
//     socket.on('disconnect', () => {
//       console.log('disconnect')
//     })
//     socket.disconnect()
//   })




 var Koa = require('koa')
 var app = new Koa()

var server = require('http').createServer(app.callback());
var io = require('socket.io')(server);
var PORT = 5656;

var cors=require('koa2-cors');
app.use(cors({
      origin: function (ctx) {
          // return 'http://localhost:8080'; // 这样就能只允许 http://localhost:8080 这个域名的请求了
          return '*'
      },
      exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
      maxAge: 5,
      credentials: true,
      allowMethods: ['GET', 'POST', 'DELETE'],
      allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
    }))


server.listen(PORT);

io.on('connection', function (socket) {
    console.log('connect')
       socket.on('disconnect', () => {
          console.log('disconnect')
        })
        socket.disconnect()
})

console.log('app listen at：'+PORT);



// var Koa = require('koa')
// var app = new Koa()
// var cors=require('koa2-cors')
// var server = require('http').Server(app.callback());
// var io = require('socket.io')(server);

// app.use(cors({
//   origin: function (ctx) {
//       // return 'http://localhost:8080'; // 这样就能只允许 http://localhost:8080 这个域名的请求了
//       return '*'
//   },
//   exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
//   maxAge: 5,
//   credentials: true,
//   allowMethods: ['GET', 'POST', 'DELETE'],
//   allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
// }))

// server.listen(9999, function () {
//   console.log('服务已经启动 ! ')
// });

// io.on('connection', function (socket) {
//   console.log('socket.io 已经连接成功！')
//   // 监控用户名节点
//   socket.on('users', function (data) {
//     console.log(data)
//     // 广播用户名
//     io.emit('users', {
//       users: data
//     })
//   })
//   // 监控消息节点
//   socket.on('messages', function (data) {
//     console.log(data)
//     // 广播消息
//     io.emit('messages', {
//       messages: data
//     });
//   });
// });