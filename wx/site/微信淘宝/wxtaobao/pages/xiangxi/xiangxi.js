var app = getApp()
Page({
  data:{

    oid:"",                     //商品的oid
    sid:0,                      //卖家的id
    imgs:{},                    //轮播图片集合
    detailUrl:"",               //商品地址
    emsFee:0,                   //邮费
    hasInvoice:0,               //是否有发票
    location:{},                //宝贝生产地
    volume:0,                   //销量
    state:"",                   //宝贝状态
    nick:"",                    //商家名称
    num:0,                      //宝贝数量
    postFee:0,                  //邮费
    price:0,                    //商品价格
    shopType:"C",               //店铺类型
    title:"",                   //宝贝标题
    initTitle:"宝贝标题：",      //导航默认标题

    autoplay : true,            //轮播图自动滚动
    indicatorDots : true,       //增加点点
    interval : 3000,            //动画3秒循环
    duration : 1000,            //动画过度时间1秒

    tip1:true,                  //提示框
    tip2:true,                  //提示框
    tip3:true,                  //提示框
    tip4:true,                  //提示框
    tip5:true,                  //提示框
    tip5name:"",                //提示框

    shareArr:["QQ空间","QQ好友","我的朋友圈","微信好友"],                        //设置分享的渠道

    strUrl:"http://www.zgdnbxg.com/aitao_old/xiangxi.php",                           //请求的地址
  
   
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
 
    console.log("onload")
    console.log(options)
    this.setData({

      //sid:options.sid,
        oid:options.oid,
        volume:options.volume

    })

     
  },
  onReady:function(){
    // 页面渲染完成
      var that = this
      wx.setNavigationBarTitle({
      title : that.data.initTitle + that.data.title
     })
  },
  onShow:function(){
    // 页面显示
      var that = this
     
      console.log("onshow")
      wx.request({
          url: that.data.strUrl,                                //请求地址
          data: {
            
            oid: this.data.oid                                  //请求参数
          
          },
          header: {
	          'Content-Type': 'application/json'                //发送数据的类型
          },
          success: function(dat) {                              //成功返回数据
             // console.log(dat)

             var obj = dat.data                                 //获取数据
            that.setData({                                      //设置数据
                imgs : obj.item_imgs.item_img,
                detailUrl:obj.detail_url,
                emsFee:obj.ems_fee,
                hasInvoice:obj.has_invoice,
                location:obj.location,
                state:obj.state,
                nick:obj.nick,
                num:obj.num,
                postFee:obj.post_fee,
                price:obj.price,
                shopType:obj.shop_type,
                title:obj.title,
                volume:that.data.volume,

            }) 

          }

      })

    
     
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },


  open:function(e){

      //console.log(e.target.dataset.id)

      var id = e.target.dataset.id 
      console.log(id)
      if(id == 1){
          console.log("我是收藏店铺的按钮")
          this.setData({
              tip1:false,
          })
      }else if(id == 2){
          console.log("我是收藏商品的按钮")
          this.setData({
              tip2:false,
          })

      }else{
          console.log("我是分享按钮")

           this.setData({
              tip4:false,
          })

      }

  },
  //收藏成功
  ok:function(e){
      
      this.setData({
              tip3:false,
      })

  },
  //选择分享
  choose:function(e){
      console.log(e)

      var name = e.target.dataset.name

       this.setData({
              tip5:false,
              tip5name:name,
      })

     
  },
  //统一关闭提示
  close:function(e){
      this.setData({
          tip1:true,
          tip2:true,
          tip3:true,
          tip4:true,
          tip5:true,
      })

  },

})