//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null,

    navList : [
                {key:"母亲节",value:0},
                {key:"父亲节",value:1},
                {key:"元宵节",value:2},
                {key:"中秋节",value:3},
                {key:"儿童节",value:4},
                {key:"妇女节",value:5},
                {key:"七夕节",value:6},
                {key:"教师节",value:7},
                {key:"新年",value:8},
                {key:"生日",value:9},
                {key:"纪念",value:10},
                
              ]
  },

})

