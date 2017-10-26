// app.js
App( {
  onLaunch: function() {
    // 调用API从本地缓存中获取数据
    var logs = wx.getStorageSync( 'logs' ) || []
    logs.unshift( Date.now() )
    wx.setStorageSync( 'logs', logs )
  },
  getWxUser: function( cb ) {
    var that = this
    if( this.globalData.wxUser ) {
      typeof cb == "function" && cb( this.globalData.wxUser )
    } else {
      // 调用登录接口
      wx.login( {
        success: function() {
          wx.getUserInfo( {
            success: function( res ) {
              that.globalData.wxUser = res.userInfo
              typeof cb == "function" && cb( that.globalData.wxUser )
            }
          })
        }
      })
    }
  },
  globalData: {
    user: null,
    wxUser: null,
    domain: true ? 'http://localhost:8080' : 'http://www.guigool.com'
  }
});