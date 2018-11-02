// const xml2js = require('xml2js');

// let getJson = (params)=>{
//     // return new Promise((resolve, reject) => {
//     //     xml2js.parseString(params,{explicitArray:false},function(err, result){
//     //         if(err){
//     //             reject(err);
//     //         }else{
//     //             resolve(result);
//     //         }
//     //     })
       
//     // });
//     return new Promise((resolve,reject)=>{
//         xml2js.parseString(params,(err,result)=>{
//             if(err) reject(err)
//             resolve(result)
//         })
//     })
// }

// export default getJson;

const xml2js = require('xml2js');

exports.msgParser = (xmlStr)=>{
	return new Promise((resolve,reject)=>{
		xml2js.parseString(xmlStr,(err,result)=>{
			if(err) reject(err)
			resolve(result)
		})
	})
}

//exports.msgParser = msgParser;