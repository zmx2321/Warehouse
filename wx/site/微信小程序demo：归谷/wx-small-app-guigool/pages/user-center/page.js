const app = getApp();

Page( {
    data: {
        user: null,
        wxUser: null
    },
    onLoad: function() {
        const _this = this;
        _this.setData( { user: app.globalData.user });
        app.getWxUser( function( wxUser ) {
            _this.setData( { wxUser: wxUser });
        });
    },
    goLogin: function() {
        wx.redirectTo( { url: '/pages/login/page' });
    },
    on_grjl_tap: function( e ) {

    },
    on_grsc_tap: function( e ) {

    },
    on_yjfk_tap: function( e ) {

    },
    on_grsz_tap: function( e ) {

    }
});