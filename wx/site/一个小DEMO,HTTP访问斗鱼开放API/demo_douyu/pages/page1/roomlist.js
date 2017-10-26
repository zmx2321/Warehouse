"use strict"
// const utils = require('../../common/utils.js');
const Constant = require('../../common/constant.js');


Page({
    data: {
    },

    // optionsData: {},
    onLoad: function(options) {
        console.log("result onload");
        // 页面初始化 options为页面跳转所带来的参数
        var that = this;
        if (options.data != null) {
            console.log('options.data is assigned');
            var str = decodeURI(options.data);
            var data = JSON.parse(str);
            //this.optionsData = data;
            this.setData({ roomlist: data });
        }else {
            // 如果没传参数过来就自己获取数据
            console.log('options.data is null');
            wx.request({
                url: Constant.DOUYU_URL_LIVE+'2',
                data: {},
                header: {
                    'Content-Type': 'application/json'
                },
                success: function(res) {
                    console.log("success")
                    if (res.data.error == 0) { //成功
                        console.debug("search ok");
                        let roomlist = res.data.data;
                        that.setData({ roomlist: roomlist });
                    } else {
                        // that.setData( { 
                        //  modalHidden: false,
                        //  modalErrorText:res.data.retMsg
                        //});
                    }
                },

                fail: function(err) {
                    console.log("fail")
                    console.log(err)
                }

            })
        }

    },
    //this.setData({roomlist:{data: [{room_name:"room1"},{room_name:"room2"}]}

    onReady: function(options) {
        console.log("onReady");
        // 页面渲染完成
    },
    onShow: function() {
        // 页面显示
        console.log("onShow");
    },
    onHide: function() {
        // 页面隐藏
        console.log("onHide");
    },
    onUnload: function() {
        // 页面关闭
        console.log("onUnload");
    },

    clickroom: function(e) {
        // wx.navigateTo(url)
        let id = e.currentTarget.id;
        let list = this.data.roomlist;
        //wx.navigateTo({ url: './room?roomid=' + id });
        //wx.redirectTo({
        wx.navigateTo({
            url: './room?roomid=' + id,
            success: function(res) {
                console.log("sucess");
                // success
            },
            fail: function() {
                // fail
            },
            complete: function() {
                // complete
            }
        })

        for (var i = 0, len = list.length; i < len; ++i) {
            if (list[i].id == id) {
                // wx.navigateTo({url: './room?roomid='+id})
            }
        }
    }
})