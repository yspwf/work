# work
work manager

有个面向企业员工管理的工作台

分为 消息，通讯录，工作台，我的 四个基础部分。

采用 webpack + vue2 的方式构建

使用方式：
git  clone  git@github.com:yspwf/work.git

npm install 


npm run dev

带创建部分：通讯录，其他部分待完善

在server文件下增加node服务部分：
1、数据库基本连接和基本操作（mysql）
   基本的mysql链接
   const mysql = require('mysql);
   
   const pool = mysql.createpool({
   
         host:'',
         
         user:'',
         
         password:'',
         
         database: ''
         
   }); 
   
  
   const query = function(sql){
   
          return new Promise((resolve, reject)=>{
          
              pool.getConnection(function(err, connection){
              
                if(err){
                
                    reject(err);
                    
                }else{
                
                    connection(sql, values, function(err, rows){
                    
                        if(err){
                        
                            reject(err);
                            
                        }else{
                        
                            resolve(rows);
                            
                        }
                        
                        connection.release();
                        
                    });
                    
                }
              });
              
          });    
   }
   
   
2、微信交互（微信接入验证，消息回复（文字和图文）,获取access_token）(这里我用的是koa2.X)


微信接入：get

        let token = '自己的token';
        
        let {signature, timestamp, echostr, nonce} = ctx.query;
        
        let arr = [timestamp, token, nonce].sort().join('');
        
        let sha1Str = sha1(arr);
        
        ctx.body = sha1Str==signature ? echostr : '';
        

获取access_token: get

        return new Promise((resolve, reject) => {
        
        var url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid="+config.appid+"&secret="+config.appsecret;
        
        request.get(url, function(err, response, body){
        
            if(!err && response.statusCode==200){
            
                resolve(body);
                
            }
            
            reject(err);
            
        });
    });
        
      








