/****
**
//jquery官方模板
//把函数全部封装在闭包里
;$(function($){        //分号避免一些不必要的麻烦
    $.fn.plugin=function(options){    //我们要传进来的参数
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
**/

;(function($){
    $.fn.table = function(options){
        var defaults = {
            evenRowClass:'evenRow',
            oddRowClass:'oddRow',
            currentRowClass:'currentRow',
            eventType1:'mouseover',
            eventType2:'mouseout',
        }

        var options = $.extend(defaults,options);

        this.each(function(){
            //偶数行
            $(this).find('tr:even').addClass(options.evenRowClass);
            //奇数行
            $(this).find('tr:odd').addClass(options.oddRowClass);

/*
基本不用这种方法
*/
            /*$(this).find('tr').mouseover(function(){
                $(this).addClass(options.currentRowClass);
            }).mouseout(function(){
                $(this).removeClass(options.currentRowClass);
            });*/

            $(this).find('tr').bind(options.eventType1,function(){
                $(this).addClass(options.currentRowClass);
            });

            $(this).find('tr').bind(options.eventType2,function(){
                $(this).removeClass(options.currentRowClass);
            });

        });
    }
})(jQuery);

$(function(){
    $('#table1').table();
});
