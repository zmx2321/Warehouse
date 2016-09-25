//jquery官方模板
//把函数全部封装在闭包里
;(function( $ ){    //分号避免一些不必要的麻烦
    $.fn.plugin = function(options){ //我们要传进来的参数
        var defaults = {    //对象
            //各种参数，各种属性
        }

        var options = $.extend(defaults,options);
        //把我们定义的defaults对象合并到options这个参数上

        this.each(function(){
           //实现功能的代码
        });
    }
})(jQuery);

$(function(){
    $('').plugin();
});
