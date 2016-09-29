$(function(){                                     //  等待DOM加载完毕.
        var $category = $('ul li:gt(5):not(:last)');             //  获得索引值大于5的品牌集合对象(除最后一条)   
        $category.hide();                                //  隐藏上面获取到的jQuery对象。
        var $toggleBtn = $('div.showmore > a');             //  获取“显示全部品牌”按钮
        $toggleBtn.click(function(){
              if($category.is(":visible")){
                    $category.hide();                            //  隐藏$category
                    $('.showmore a span')
                        .css("background","url(img/down.gif) no-repeat 0 0")     
                        .text("显示全部品牌");                  //改变背景图片和文本
                    $('ul li').removeClass("promoted");            // 去掉高亮样式
              }else{
                    $category.show();                            //  显示$category
                    $('.showmore a span')
                        .css("background","url(img/up.gif) no-repeat 0 0")     
                        .text("精简显示品牌");                  //改变背景图片和文本
                    $('ul li').filter(":contains('佳能'),:contains('尼康'),:contains('奥林巴斯')")
                        .addClass("promoted");                //添加高亮样式
              }
            return false;                              //超链接不跳转
        })
})
