const sha1 = require('sha1');

//const getJson = require('./xml.js');
const msgParser = require('./xml.js');

module.exports = function(config){
    return async (ctx, next)=>{
        try{
             
            if(ctx.method=="GET"){
                //console.log("get");
                let token = config.token;
                let {signature,echostr,timestamp,nonce} = ctx.query;
                //console.log(signature+"---"+echostr+"-----"+timestamp+"-----"+nonce);
                //let token = "weixin";
                let tmpArr = [timestamp,token,nonce].sort().join('');
                let sha1Signature = sha1(tmpArr);
                ctx.body = sha1Signature==signature ? echostr : '';
            }else if(ctx.method=="POST" && ctx.is("text/xml")){

                let promise = new Promise((resolve, reject)=>{
                    let buffer = [];
                    ctx.req.on('data',function(data){
                            buffer.push(data);
                    });
                    ctx.req.on('end', function(){
                           xmlMsg = Buffer.concat(buffer).toString('utf-8');
                           msgParser.msgParser(xmlMsg).then(resolve).catch(reject);
                    });
                });

                await promise.then((result) => {
                    ctx.req.body = result.xml;
                }).catch((e)=>{
                    e.status = 400;
                });

                
                await next();   
            }else{
                await next();
            }
            
        }catch(e){
            console.log(e);
        }  
        
    }
}






