Page( {
  data: {
    swipeItemImageUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    categories: [
      { text: '政策解读', image: '/pages/index/image/zcjd.png', pagePath: '/pages/policy-category/page' },
      { text: '深度洞察', image: '/pages/index/image/sddc.png', pagePath: '/pages/article/page' },
      { text: '最新消息', image: '/pages/index/image/zxxx.png', pagePath: '' },
      { text: '归谷正传', image: '/pages/index/image/ggzz.png', pagePath: '' },
      { text: '猎聘专题', image: '/pages/index/image/lpzt.png', pagePath: '' },
      { text: '协会专题', image: '/pages/index/image/xhzt.png', pagePath: '' },
      { text: '活动专题', image: '/pages/index/image/hdzt.png', pagePath: '' },
      { text: '关于我们', image: '/pages/index/image/gywm.png', pagePath: '' }
    ]
  },
  onCategoryTap: function( evt ) {
    if (!!evt.currentTarget.dataset.pagePath) {
      wx.navigateTo( { url: evt.currentTarget.dataset.pagePath });
    }
  }
});
