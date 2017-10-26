const app = getApp();
const domain = app.globalData.domain;

Page( {
    data: {
        phone: null,
        pwd: null,
        modelContent: ''
    },
    onLoad: function() {

    },
    onPhoneInput: function( e ) {
        const _this = this;
        _this.setData( { phone: e.detail.value });
    },
    onPwdInput: function( e ) {
        const _this = this;
        _this.setData( { pwd: e.detail.value });
    },
    onLoginTap: function( e ) {
        const _this = this;
        wx.request( {
            method: 'post',
            url: domain + '/wx/login',
            data: { phone: _this.data.phone, pwd: _this.data.pwd },
            success: function( res ) {
                if( res.data.code === 0 ) {
                    app.globalData.user = res.data.data.user;
                    app.globalData.user.photo = domain + app.globalData.user.photo;
                    wx.redirectTo( { url: '/pages/user-center/page' });
                } else {
                    _this.setData( { modelContent: res.data.msg });
                }
            }
        });
    },
    onModalConfirm: function( e ) {
        const _this = this;
        _this.setData( { modelContent: '' });
    }
});