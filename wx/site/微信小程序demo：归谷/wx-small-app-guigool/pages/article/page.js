var domain = getApp().globalData.domain;

Page( {
    data: {
        swiperItems: [],
        categories: [],
        tags: {},
        curCategory: '',
        list: []
    },
    onLoad: function() {
        var _this = this;
        loadPageInitData( _this );
        loadList( _this );
    },
    onCategoryTap: function( e ) {
        var _this = this;
        _this.setData( { curCategory: e.currentTarget.dataset.key });
        loadList( _this );
    }
});

var loadPageInitData = function( page ) {
    wx.request( {
        method: 'get',
        url: domain + '/wx/article/loadPageInitData',
        success: function( res ) {
            console.log( res );
            for( var key in res.data.categories ) {
                var value = res.data.categories[ key ];
                page.data.categories.push( { key: key, value: value });
            }
            page.setData( {
                swiperItems: res.data.slides,
                categories: page.data.categories,
                tags: res.data.tags,
                curCategory: page.data.categories[ 0 ].key
            });
        }
    });
};

var loadList = function( page ) {
    wx.request( {
        method: 'post',
        url: domain + '/wx/article/list',
        data: {
            sort: { createTime: -1 },
            currentPage: 0,
            pageSize: 100,
            category: page.data.curCategory
        },
        success: function( res ) {
            page.setData( { list: res.data.rs });
        }
    });
};