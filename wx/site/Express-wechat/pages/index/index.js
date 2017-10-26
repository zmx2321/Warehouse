// //index.js
// //获取应用实例
// var app = getApp()
// Page({
//   data: {
//     motto: 'Hello World',
//     userInfo: {}
//   },
//   //事件处理函数
//   bindViewTap: function() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   onLoad: function () {
//     console.log('onLoad')
//     var that = this
//     //调用应用实例的方法获取全局数据
//     app.getUserInfo(function(userInfo){
//       //更新数据
//       that.setData({
//         userInfo:userInfo
//       })
//     })
//   }
// })

Page( {
  data: {
    express_list: [
      {
        'com': '顺丰',
        'no': 'sf'
      },
      {
        'com': '圆通',
        'no': 'yt'
      },
      {
        'com': '申通',
        'no': 'sto'
      },
      {
        'com': '韵达',
        'no': 'yd'
      },
      {
        'com': '天天',
        'no': 'tt'
      },
      {
        'com': 'EMS',
        'no': 'ems'
      },
      {
        'com': '中通',
        'no': 'zto'
      },
      {
        'com': '汇通',
        'no': 'hy'
      }
    ]
  },
  bindItemTap : function(item){
    wx.navigateTo({
      url : '../details/details?com='+item.currentTarget.dataset.com+'&no='+item.currentTarget.dataset.no
    });
  }
});
