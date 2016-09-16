;(function($){
    $.fn.tab = function(options){
        var defaults = {
            currentClass:'current',
            tabNav:'.tabNav>li',
            tabContent:'.tabContent>div',
            evenType:'click',
        }

        var options = $.extend(defaults,options);

        this.each(function(){
            var _this = $(this);
            $(this).find(defaults.tabNav).bind(options.evenType,function(){
                $(this).addClass(options.currentClass).siblings().removeClass(options.currentClass);
                var index = $(this).index();
                _this.find(options.tabContent).eq(index).show().siblings().hide();
            });
        });
    }
})(jQuery);


$(function(){
    $('.tab').tab();
});
