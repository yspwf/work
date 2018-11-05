var http = require('http');
var url = require('url');
var events = require('./event.js');
http.createServer(function(req, res){
    res.writeHead(200, {'Content-type':'text/html;charset=utf-8'});
    if(req.url !== 'favicon.ico'){
        var user = new events();
        var params = url.parse(req.url, true).query;
        
        user.eventEmitter.once('success', function(username, pwd){
            res.write('注册成功！');
            console.log(username);
            console.log(pwd);
            user.login(username, pwd);
            res.end();
        });
        // console.log(params.name);
        // console.log(params.pwd);
        user.reg(params.name,params.pwd);
    } 
    
     // res.write("4353452345");
    // res.end();
}).listen(8080);
console.log("server is run at http://127.0.0.1:8080");