 //<![CDATA[
  $(function(){
      //获取样式
      $("input:eq(0)").click(function(){
            alert( $("p").attr("class") );
      });
      //设置样式
      $("input:eq(1)").click(function(){
            $("p").attr("class","high");
      });
      //追加样式
      $("input:eq(2)").click(function(){
            $("p").addClass("another");
      });   
      //删除全部样式
      $("input:eq(3)").click(function(){
            $("p").removeClass();
      }); 
       //删除指定样式
      $("input:eq(4)").click(function(){
            $("p").removeClass("high");
      });   
      //重复切换样式
      $("input:eq(5)").click(function(){
            $("p").toggleClass("another");
      }); 
      //判断元素是否含有某样式
      $("input:eq(6)").click(function(){
            alert( $("p").hasClass("another") )
            alert( $("p").is(".another") )
      }); 
  });
  //]]>
