//index.js
//获取应用实例
var app = getApp()
Page( {

  data: {
    list:[
      {
        title:'深海逃生 47 (2016)\n',
        content:'一对姐妹潜水时被海底一个水下鲨鱼观察笼困住。她们只有一个小时的时间逃脱牢笼回到水面...',
        imgurl:'../../source/images/img1.jpg',
      },
       {
        title:'无伴奏 無伴奏 (2016)\n',
        content:'《无伴奏》讲述跟随时代潮流参与学园纷争的女高中生在和大学生恋爱后逐渐变得成熟的故事',
        imgurl:'../../source/images/img2.jpg',
      },
       {
        title:'类人猿行动 (2016)\n',
        content:'男主杰米·多南与希里安·墨菲加盟二战题材影片,影片根据真实事件改编',
        imgurl:'../../source/images/img3.jpg',
      },
       {
        title:'绝对统治 (2016)\n',
        content:'丹尼尔扮演一位年轻的联邦调查局探员，深入新纳粹组织卧底，查出密谋制作脏弹的恐怖分子。',
        imgurl:'../../source/images/img4.jpg',
      },
        ],

    date:"10月26日 周三",
    items: [ {
      message: 'foo',
    }, {
        message: 'bar'
      }],
    imgUrls: [
      {
        url: 'http://img.hb.aicdn.com/42f1c1bfc23929cc35fedc5d7f364b749973ed33ad2be-FXvuhX',
        txt1: "当我们17岁",
        txt2:"爱恨都来得莫名其妙"
      },
      {
        url: 'http://img.hb.aicdn.com/4649bf98371c7e900c93e772f5a26f6223933744a3602-o1p1o2',
        txt1: "耶稣基督：走出埃及 ",
        txt2:"上帝之子耶稣"
      },
      {
        url: 'http://img.hb.aicdn.com/2397ca2a6c0ee445f20949aaa3bd4cc9b7188e496ae95-crz27s',
        txt1: "无伴奏 無伴奏",
        txt2:"我只是喜欢那个貌似全世界少年人都疯狂的年代"
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 500
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo( {
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    console.log( 'onLoad' )
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo( function( userInfo ) {
      //更新数据
      that.setData( {
        userInfo: userInfo
      })
    })
  }
})
