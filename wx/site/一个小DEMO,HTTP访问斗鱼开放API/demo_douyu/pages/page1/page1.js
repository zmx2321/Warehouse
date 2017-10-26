//page1 
const Constant = require('../../common/constant.js');


Page({
    data: {
        page1: []
    },

    onLoad: function() {
        console.debug("page1 onLoad1")

        console.debug("page1 onload1...2")
    },

    // 演示打开方式1， 直接打开页面，在页面加载过程中查询列表数据
    roomlist: function(ev) {
        wx.navigateTo({
            url: "./roomlist"
        });
    },

    // 演示打开方式2,  先查询到房间列表数据,然后打开页面显示
    roomlist2: function(ev) {

        let that = this; //保留page函数中object的引用

        wx.request({
            url: Constant.DOUYU_URL_LIVE +'2',  //这儿随便选一个
            // url: 'http://open.douyucdn.cn/api/RoomApi/live/2',
            data: {},
            header: {
                'Content-Type': 'application/json'
            },
            success: function(res) {
                console.log("success")
                if (res.data.error == 0) { //成功
                    console.debug("search ok");
                    let roomlist = res.data.data;
                    
                    wx.navigateTo({
                        url: "./roomlist?" + "data=" + encodeURI(JSON.stringify(roomlist))
                    });
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
})