const Koa = require('koa');
const app = new Koa();


//引入 koa-router
const KoaRouter = require('koa-router');
const router = new KoaRouter();


//cors是一个w3c标准，全称为“跨域资源共享” (cross-origin resource sharing)
var cors = require('koa2-cors');

app.use(cors({
    //origin:'*',
    origin:function (ctx) {
        return "*";
        /*
        if (ctx.url === '/cors') {
            return "*"; // 允许来自所有域名请求
        }
        return 'http://localhost:3201';
        */
    },
    exposeHeaders:['WWW-Authenticate','Server-Authorization'],
    maxAge:360,
    credentials: true,
    allowMethods: ['GET','POST','DELETE'],
    allowHeaders: ['Content-Type', 'Authorization','Accept']
}));

// app.use(cors({
//     origin: function(ctx){
//         if(ctx.url === '/test'){
//             return "*";
//         }
//         return 'http://localhost:5051';
//     },
//     exposeHeaders:['WWW-Authebticate', 'Server-Authorization'],
//     maxAge: 5,
//     credentials: true,
//     allowMethods:['GET','POST','DELETE'],
//     allowHeaders:['Content-Type','Authorization','Accept'],
// }));


//引入post 数据解析模块
const bodyparser = require('koa-bodyparser');
app.use(bodyparser());

//引入mysql 操作类
const db = require('./mysql.js');

router.get("/",(ctx, next)=>{
    ctx.body = "234234234";
});

router.post("/user/login",async (ctx, next)=>{
    ctx.set("Access-Control-Allow-Origin","*");
    const info = ctx.request.body;
    console.log(info);
    //let result = await db.query('select * from user where age=20');
    //console.log(result);
    //console.log("post login");
});


app.use(router.routes()).use(router.allowedMethods());


/*
app.use(ctx => {
    ctx.body = "hello koa !!!";
});
*/
app.listen(5656, function(){
    console.log('server is started !!!');
});