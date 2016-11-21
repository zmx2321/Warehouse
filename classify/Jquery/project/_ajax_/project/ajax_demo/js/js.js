$(function () {

    //Jaja1();
    
    //Jaja2();
    
    Jaja3();

});

function Jaja1() {
    $.ajax({
        type: "post",
        url: "http://school.iboom.tv/cs/data.json?x=" + Math.random(),
        scriptCharset: 'gbk',
        dataType: "jsonp",//数据类型为jsonp  
        jsonp: "callback",//服务端用于接收callback调用的function名的参数  
        jsonpCallback: "jquery",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
        success: function (data) {
            var datalength = data.length;
            var str = "";
            for (var i = 0; i < datalength; i++) {
                str += "<dd><ul><li>" + data[i]["position"] + 
                "</li><li>" + data[i]["className"] +
                "</li><li>" + data[i]["key"] + 
                "</li><li><div class='lx_pic'><img src='" + Img(data[i]["header"]) + "' /></div><span>" + data[i]["name"] + 
                "</span></li><li>" + data[i]["score"] +
                "s</li></ul></dd>";
            }
            $("#lx_main").append(str);
        },
        error: function () {

        }
    });
}

function Jaja2() {
    $.ajax({
        type: "post",
        url: "http://school.iboom.tv/school/boot/rank/getRankList?x=" + Math.random(),
        data: { "qq": "1", "password": "11111111" },
        scriptCharset: 'gbk',
        dataType: "jsonp",//数据类型为jsonp  
        jsonp: "callback",//服务端用于接收callback调用的function名的参数  
        jsonpCallback: "jquery",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
        success: function (data) {
            var datalength = data.length;
            var str = "";
            for (var i = 0; i < datalength; i++) {
                str += "<dd><ul><li>" + data[i]["position"] +
                "</li><li>" + data[i]["className"] +
                "</li><li>" + data[i]["key"] +
                "</li><li><div class='lx_pic'><img src='" + Img(data[i]["header"]) + "' /></div><span>" + data[i]["name"] +
                "</span></li><li>" + data[i]["score"] + "s</li></ul></dd>";
            }
            $("#lx_main").append(str);
        },
        error: function () {

        }
    });
}

function Jaja3() {
    $.ajax({
        type: "post",
        /*async: false,*/
        url: "http://school.iboom.tv/school/auth/login.do?x=" + Math.random(),
        data: { "qq": "1", "password": "11111111" },
        scriptCharset: 'gbk',
        dataType: "jsonp",//数据类型为jsonp  
        jsonp: "callback",//服务端用于接收callback调用的function名的参数  
        jsonpCallback: "jquery",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
        success: function (data) {
            Jaja2();
        },
        error: function () {

        }
    });
}

function Img(url) {
    if (url == null) {
        return "http://school.iboom.tv/school/images/public/default/defaultIco.png";
    } else {
        return "http://static.iboom.tv/static/img/" + url;
    }
}