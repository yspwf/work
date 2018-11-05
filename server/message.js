const request = require('request'); 
exports.text = (objXml) => {
    let keyvalue = objXml.Content['0'];
    switch(keyvalue){
        case "openid":
             Content = objXml.FromUserName['0'];
             break;
        default:
             Content =  "感谢你的关注，我们竭诚为你服务！";
             break;
    }
    
    result =  "<xml><ToUserName><![CDATA["+ objXml.FromUserName +"]]></ToUserName>";
    result += "<FromUserName><![CDATA["+ objXml.ToUserName +"]]></FromUserName>";
    result += "<CreateTime>"+ new Date().getTime() +"</CreateTime>";
    result += "<MsgType><![CDATA[text]]></MsgType>";
    result += "<Content><![CDATA["+ Content +"]]></Content></xml>";
    return result;
}


exports.message = (objXml,msg='')=>{
    if(!Array.isArray(msg)){
        return "新闻不能为空！";
    }
    result =  "<xml><ToUserName><![CDATA["+ objXml.FromUserName +"]]></ToUserName>";
    result += "<FromUserName><![CDATA["+ objXml.ToUserName +"]]></FromUserName>";
    result += "<CreateTime>"+ new Date().getTime() +"</CreateTime>";
    result += "<MsgType><![CDATA[news]]></MsgType>";
    result += "<ArticleCount>"+msg.length+"</ArticleCount>";
    result += "<Articles>";

    for (var i in msg) {
        result+="<item>";
        result+="<Title><![CDATA["+ (msg[i].Title || '') +"]]></Title>";
        result+="<Description><![CDATA["+ (msg[i].Description || '') +"]]></Description>";
        result+="<PicUrl><![CDATA["+ (msg[i].PicUrl || '') +"]]></PicUrl>";
        result+="<Url><![CDATA["+ (msg[i].Url || '') +"]]></Url>";
        result+="</item>";
      }
    result += "</Articles></xml>";
    return result;
}

exports.getToken = (config)=>{
    return new Promise((resolve, reject) => {
        var url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid="+config.appid+"&secret="+config.appsecret;
        request.get(url, function(err, response, body){
            if(!err && response.statusCode==200){
                resolve(body);
            }
            reject(err);
        });
    });
}


// Wechat.prototype.getToken = ()=>{
//     //https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET
// }