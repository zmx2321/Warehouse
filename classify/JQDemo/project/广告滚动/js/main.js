/*新闻滚动*/
$(function(){
        var $this = $(".scrollNews");
        var scrollTimer;
        $this.hover(function(){
              clearInterval(scrollTimer);
         },function(){
           scrollTimer = setInterval(function(){
                         scrollNews( $this );
                    }, 3000 );
        }).trigger("mouseleave");
});
function scrollNews(obj){
   var $self = obj.find("ul:first");
   var lineHeight = $self.find("li:first").height(); //获取行高
   $self.animate({ "marginTop" : -lineHeight +"px" }, 600 , function(){
         $self.css({marginTop:0}).find("li:first").appendTo($self); //appendTo能直接移动元素
   })
}


/*模块展开和关闭*/
$(function(){
         $(".module_up_down").toggle(function(){
                    var $self = $(this);
                    $self.prev().slideToggle(600,function(){
                          $("img",$self).attr("src","images/up.gif");
                    });
             },function(){
                    var $self = $(this);
                    $self.prev().slideToggle(600,function(){
                          $("img",$self).attr("src","images/down.gif");
                    });
         })
})

/*超链接文字提示*/
$(function(){
    var x = 10; 
    var y = 20;
    $("a.tooltip").mouseover(function(e){
           this.myTitle = this.title;
        this.title = "";   
        var tooltip = "<div id='tooltip'>"+ this.myTitle +"</div>"; //创建 div 元素
        $("body").append(tooltip);    //把它追加到文档中
        $("#tooltip")
            .css({
                "top": (e.pageY+y) + "px",
                "left": (e.pageX+x)  + "px"
            }).show("fast");      //设置x坐标和y坐标，并且显示
    }).mouseout(function(){       
        this.title = this.myTitle;
        $("#tooltip").remove();   //移除
    }).mousemove(function(e){
        $("#tooltip")
            .css({
                "top": (e.pageY+y) + "px",
                "left": (e.pageX+x)  + "px"
            });
    });
})
