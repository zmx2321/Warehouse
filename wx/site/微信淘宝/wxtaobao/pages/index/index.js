//index.js
//获取应用实例
var app = getApp()
Page({
  data:{
    list: [],         //商品列表

    volume:0,         //销量
    navList:[],       //导航链接数组，全局变量控制

    keyword:"母亲节",       //设置默认关键字

    curpg:1,          //当前页面

    totpg:0,          //总页量

    re_url : "http://www.zgdnbxg.com/aitao_old/test.php",             //数据请求的地址




  },
    onLoad:function(options){
      // 页面初始化 options为页面跳转所带来的参数

      console.log("------------------onload-------------------")

      var that = this

      this.setData({
        
        curpg: options.pg ? options.pg : 1,                             //判断是否有分页,如不是则默认第一页

        keyword:options.key ? options.key : that.data.keyword,          //判断是否跳转，如不是，则默认搜索自定义的关键词

      })
    },
    onReady:function(){
      // 页面渲染完成
      console.log("-----------------onready-------------------")

      this.setData({

         navList:app.globalData.navList,                            //设置导航
      })
      
    },
    onShow:function(){
      // 页面显示
      console.log("-----------------onshow--------------------")
      var that = this
      wx.request({
          url: that.data.re_url,
          data: {
            volume: that.data.volume,       //设置当前
            key:that.data.keyword,          //发送请求传送关键字
            pg:that.data.curpg,            //传给后台的当前页
            
          },
          header: {
	          'Content-Type': 'application/json'        //请求的数据类型
          },
          success: function(dat) {
         
            console.log("----------------数据返回成功-------------")

            console.log(dat)

            var d = dat.data            //获取数据

            that.setData({
                list : d.aitaobao_item,   //设置数据
                totpg:d.tot,              //总共多少页
            }) 

          }
      })

    },

    goto:function(event){

      //上一页下一页
      var name = event.target.dataset.name          //获取当前的按钮name的值
      var that = this

      console.log(name)

      if("up" == name){                            //上一页按钮
            console.log("up")


            var up = parseInt(that.data.curpg) - 1

            var urlstr = 'index?key' + that.data.keyword + '&pg=' + up

            this.setData({
                              curpg : up

            })

            wx.redirectTo({
              url : urlstr
            })

      }

      if("down" == name){                         //下一页按钮
            console.log("down")

            console.log(that.data.keyword)

            var next = parseInt(that.data.curpg) + 1

            console.log(next)

            var urlstr = 'index?key=' + that.data.keyword + '&pg=' + next

            this.setData({
                  curpg : next

            })
            wx.redirectTo({
              url: urlstr
            })
      }
    },

    onHide:function(){
      // 页面隐藏
    },

    onUnload:function(){
      // 页面关闭
    }
  
})
