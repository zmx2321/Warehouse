function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}
function paserPostData(obj) {
  var str = [];
  for(var p in obj){
    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
  }
   return str.join("&");

}
//封装的的ajax发送数据
function ajax(url, { data ={}, method = 'GET', header = {} }){
    if(method==='POST'){
        header['Content-Type']='application/x-www-form-urlencoded';
        data=paserPostData(data);
        console.log(data);
    }
            
  
    var promise = new Promise(function(resolve, reject) { 
       wx.request({url:url,data:data,method:method,header:header,success:function(res){
              resolve(res);
        },fail:function(err){
              console.log(err)
              reject(err)
            }
        }) 
              
    });
    return promise;
    
}
const Str=class Str{

  constructor(){}

}
//类模块的使用看log.js
const Person=class Person{
  constructor(){}
  say(){
    console.log('aaaaa');
  }
}

module.exports = {
  formatTime: formatTime,
  paserPostData:paserPostData,
  Person:Person,
  ajax:ajax
}
