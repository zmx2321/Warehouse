"use strict"

const Constant = require('../../common/constant.js');

function allPrpos(obj) {
    var props = [];
    for (var p in obj) {
        if (typeof(obj[p]) == "function") { //obj[p]();
        } else {
            props.push({ key: p, value: obj[p] });

        }
    }
    return props;
}

Page({
    data: {
        roominfo: []

    },
    onLoad: function(options) {
        console.log("room onload");
        console.log(options);
        let roomid = options.roomid;
        var that = this;
        wx.request({
            url: Constant.DOUYU_URL_ROOM + roomid,
            // url: 'http://open.douyucdn.cn/api/RoomApi/room/' + roomid,
            data: {},
            header: {
                'Content-Type': 'application/json'
            },
            success: function(res) {
                console.log("success")
                if (res.data.error == 0) { //成功
                    console.debug("search ok");
                    let data = res.data.data;
                    let roominfo = allPrpos(data);
                    that.setData({ roominfo: roominfo });
                } else {}
            },

            fail: function(err) {
                console.log("fail")
                console.log(err)
            }

        })

    },

    onReady: function() {
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
    }
})