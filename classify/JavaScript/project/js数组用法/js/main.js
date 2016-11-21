/*
新建一个空数组
获取所有name为"check"的多选框
循环判断多选按钮是否被选中，如果被选中，则添加到数组里
获得输出按钮，然后为按钮添加onclick事件，输出数组的长度
 */
window.onload = function(){
    var btn = document.getElementById("btn");
    
    //console.log(btn);
    btn.onclick = function(){
        var arrays = new Array();
        var items = document.getElementsByName("check");
        for(var i=0; i<items.length; i++){
            if(items[i].checked){
                arrays.push(items[i].value);
            }
            console.log(arrays.length);
        }
    }
    
}