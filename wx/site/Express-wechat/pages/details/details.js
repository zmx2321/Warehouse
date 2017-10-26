var app = getApp();
var apiKey = app.globalData.apiKey;
Page( {
  data: {
    no:"",
    modalHidden:true,
    hiddenLoding : true,
    Error_Msg : ''
  },
  onLoad : function(options){
    this.setData({
      currentExpress : {
        com : options.no
      }
    });
    
  },
  modalChange:function(){
    this.setData({
      modalHidden:true
    });
  },
  bindInputNo:function(event){
    this.setData({
      no:event.detail.value
    });
  },
  bindSearachTab:function(){
    var that = this;
    that.setData({
      hiddenLoding:false
    });
    wx.request({
      url : 'http://v.juhe.cn/exp/index',
      data : {
       key : apiKey,
       com : this.data.currentExpress.com,
       no : this.data.no
      },
      success:function(res){
        var result = res.data;
        console.info(result);
        if(result.error_code != 0){
          that.setData({
            Error_Msg : result.reason,
            modalHidden: false
          });
          return;
        }

        that.setData({
          items : result.result.list
        });
      },
      complete:function(){
        that.setData({
          hiddenLoding:true
        });
      }
    });
  }

  
});
