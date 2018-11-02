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

var KoaRouter = require('koa-router');
var router = new KoaRouter();
var KoaBodyparser = require('koa-bodyparser');

app.use(KoaBodyparser());

var md5 = require('md5');
var sha1 = require('sha1');



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

let config = {
    token:'weixin',
    appid:'wx49b53dab5ba0c62d',
    appsecret:'f30db31f5ec630631b3dff48dc1447a0'
}
let weixin = require('./middleware.js');
app.use(weixin(config));
let wechat = require('./message.js');


var server = require('http').createServer(app.callback());
var io = require('socket.io')(server);
var PORT = 80;



router.post("/", async(ctx, next) => {
    //console.log(ctx.req.body);
    // var contentArr = [
    //     {Title:"汽车保养知识",Description:"汽车保养注意事项",PicUrl:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1969823874,187094809&fm=173&app=25&f=JPG?w=640&h=446&s=DD95489A6C5DB5DE9A42D6AF0300701D",Url:"http://blog.csdn.net/hvkcoder/article/details/72868520"},
    // ];
    // let res = text.message(ctx.req.body, contentArr);
    // console.log(res);
    // ctx.body = res;

   
    // let res = wechat.text(ctx.req.body);
    // console.log(res);
    // ctx.body = res;

    let res = await wechat.getToken(config);
    console.log(res);

    //ctx.res.setHeader('Content-Type','text/plain');
    //ctx.res.end(res);
});




router.get("/wx/validate", async (ctx, next) => {
    let signature = ctx.query.signature;
    let echostr = ctx.query.echostr;
    let timestamp = ctx.query.timestamp;
    let nonce = ctx.query.nonce;

    let token = "weixin";
    let tmpArr = [timestamp,token,nonce].sort().join('');
    let sha1Signature = sha1(tmpArr);
    ctx.body = sha1Signature==signature ? echostr : '';
});    

function getJson(ctx){
    return new Promise((resolve, reject)=>{
        var buffer = [];
        //监听 data 事件 用于接收数据
        ctx.req.on('data',function(data){
            buffer.push(data);
        });
        //监听 end 事件 用于处理接收完成的数据
        ctx.req.on('end',function(){
            var msgXml = Buffer.concat(buffer).toString('utf-8');
            //console.log(msgXml);
            xml2js.parseString(msgXml, {explicitArray:false},function(err, result){
                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            })
        });
        // let buf = '';
        // ctx.req.setEncoding('utf8');
        // ctx.req.on('data', (chunk)=>{
        //     buf += chunk;
        // });
        // ctx.req.on('end', ()=>{
        //     xml2js.parseString(buf, {explicitArray:false}, function(err, result){
        //         if(err){
        //             reject(err);
        //         }else{
        //             resolve(result);
        //         }
        //     })
        // });
    });
}

router.post("/wx/validate", async (ctx, next) => {
   
    let data = await getJson(ctx);
    //console.log(data);
    let msg = data.xml;
    let MsgType = msg.MsgType;
    let result = '';
    if(MsgType == 'text' && msg.Content=='1'){
        var contentArr = [
            {Title:"Node.js 微信自定义菜单",Description:"使用Node.js实现自定义微信菜单",PicUrl:"http://img.zcool.cn/community/0125fd5770dfa50000018c1b486f15.jpg@1280w_1l_2o_100sh.jpg",Url:"http://blog.csdn.net/hvkcoder/article/details/72868520"},
            {Title:"Node.js access_token的获取、存储及更新",Description:"Node.js access_token的获取、存储及更新",PicUrl:"http://img.zcool.cn/community/0125fd5770dfa50000018c1b486f15.jpg@1280w_1l_2o_100sh.jpg",Url:"http://blog.csdn.net/hvkcoder/article/details/72783631"},
            {Title:"Node.js 接入微信公众平台开发",Description:"Node.js 接入微信公众平台开发",PicUrl:"http://img.zcool.cn/community/0125fd5770dfa50000018c1b486f15.jpg@1280w_1l_2o_100sh.jpg",Url:"http://blog.csdn.net/hvkcoder/article/details/72765279"}
        ];

       
    

    result =  "<xml><ToUserName><![CDATA["+ msg.FromUserName +"]]></ToUserName>";
    result += "<FromUserName><![CDATA["+ msg.ToUserName +"]]></FromUserName>";
    result += "<CreateTime>"+ new Date().getTime() +"</CreateTime>";
    result += "<MsgType><![CDATA[news]]></MsgType>";
    result += "<ArticleCount>"+contentArr.length+"</ArticleCount>";
    result += "<Articles>";

    for (var i in contentArr) {
        result+="<item>";
        result+="<Title><![CDATA["+ (contentArr[i].Title || '') +"]]></Title>";
        result+="<Description><![CDATA["+ (contentArr[i].Description || '') +"]]></Description>";
        result+="<PicUrl><![CDATA["+ (contentArr[i].PicUrl || '') +"]]></PicUrl>";
        result+="<Url><![CDATA["+ (contentArr[i].Url || '') +"]]></Url>";
        result+="</item>";
      }
    result += "</Articles></xml>";
      
     
    }else{
        result =  "<xml><ToUserName><![CDATA["+ msg.FromUserName +"]]></ToUserName>";
        result += "<FromUserName><![CDATA["+ msg.ToUserName +"]]></FromUserName>";
        result += "<CreateTime>"+ new Date().getTime() +"</CreateTime>";
        result += "<MsgType><![CDATA[text]]></MsgType>";
        result += "<Content><![CDATA["+ msg.Content +"]]></Content></xml>";
    }
    console.log(result);
    //ctx.res.setHeader('Content-Type','text/plain');
    //ctx.res.end(result);
    ctx.body = result;
   
});


   
router.post("/user/login",async (ctx, next)=>{
     const info = ctx.request.body;
     console.log(md5(info.password));
   //  let result = await db.query('select * from user where age=20');
    // ctx.body = result;
     //console.log("post login");
});    

app.use(router.routes()).use(router.allowedMethods());

server.listen(PORT);

io.on('connection', function (socket) {
    console.log('connect')
    socket.on('myoperationevent', function(data){
        console.log(data);
        socket.name = data.name;
    })

    socket.on('disconnect', (data) => {
        console.log(data);
        console.log(socket.name);
    })

      

      //    socket.on('disconnect', () => {
    //       console.log('disconnect')
    //     })
    //     socket.disconnect()
     

})


console.log('app listen at：'+PORT);