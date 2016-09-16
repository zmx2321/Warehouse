$.myAlert = function(str){
    alert(str);
};
$(function(){
    var rr="参数参数惨是";
    $(".aaa").click(function(){
        $.myAlert(rr);
    });
});
