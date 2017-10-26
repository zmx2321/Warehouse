var domain = getApp().globalData.domain;

Page( {
  data: {
    swiperItems: [],
    policyCategories: [],
    location: {
      countries: [ '中国' ],
      provinces: {
        '中国': [ '广东省' ]
      },
      cities: {
        '广东省': [ '深圳市' ]
      },
      counties: {
        '深圳市': [ '罗湖区', '福田区', '南山区', '宝安区', '龙岗区', '盐田区', '龙华新区', '坪山新区', '光明新区', '大鹏新区' ]
      }
    },
    selected: { country: '中国', province: '', city: '', county: '' }
  },
  onLoad: function() {
    var _this = this;
    loadSwiperItem( _this );
    loadPolicyCategory( _this );
  },
  onCountryTap: function( e ) {
    var _this = this;
    _this.setData( {
      'selected.country': e.currentTarget.dataset.value,
      'selected.province': '',
      'selected.city': '',
      'selected.county': ''
    });
    loadPolicyCategory( _this );
  },
  onProvinceTap: function( e ) {
    var _this = this;
    _this.setData( {
      'selected.province': e.currentTarget.dataset.value,
      'selected.city': '',
      'selected.county': ''
    });
    loadPolicyCategory( _this );
  },
  onCityTap: function( e ) {
    var _this = this;
    _this.setData( {
      'selected.city': e.currentTarget.dataset.value,
      'selected.county': ''
    });
    loadPolicyCategory( _this );
  },
  onCountyTap: function( e ) {
    var _this = this;
    _this.setData( { 'selected.county': e.currentTarget.dataset.value });
    loadPolicyCategory( _this );
  }
});

var loadSwiperItem = function( page ) {
  wx.request( {
    method: 'get',
    url: domain + '/wx/policy/category/slides',
    success: function( res ) {
      res.data.slides.map( function( item ) {
        page.data.swiperItems.push( { image: item.img, url: item.url });
      });
      page.setData( {
        swiperItems: page.data.swiperItems
      });
    }
  });
};

var loadPolicyCategory = function( page ) {
  // 拼接请求数据path [
  var path = page.data.selected.country === '中国' ? '国家' : page.data.selected.country;
  if (page.data.selected.province !== '') {
    path += '`@`' + page.data.selected.province;
  }
  if (page.data.selected.city !== '') {
    path += '`@`' + page.data.selected.city;
  }
  if (page.data.selected.county !== '') {
    path += '`@`' + page.data.selected.county;
  }
  // ]
  wx.request( {
    method: 'post',
    url: domain + '/wx/policy/category/list',
    data: {
      path: path,
      sort: { createTime: -1 },
      currentPage: 0,
      pageSize: 100
    },
    success: function( res ) {
      page.setData( { policyCategories: res.data.rs });
    }
  });
};
