//等待dom元素加载完毕.
$(document).ready(function(){
    var $cr = $("#cr");  //jQuery对象
    $cr.click(function(){
        if($cr.is(":checked")){ //jQuery方式判断
            alert("感谢你的支持!你可以继续操作！");
        }
    })
});
