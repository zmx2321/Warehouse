      /*
    辅助例子
    1,自动重置
    2,给元素添加动画
  */

  $(document).ready(function(){
       //手动重置页面元素
      $("#reset").click(function(){
          $("*").removeAttr("style");
           $("div[class=none]").css({"display":"none"});
      });
      //判断是否自动重置
       $("input[type=button]").click(function(){
          if($("#isreset").is(":checked")){
               $("#reset").click();
           }
      });
      //给id为mover的元素添加动画.
       function animateIt() {
          $("#mover").slideToggle("slow", animateIt);
        }
        animateIt();
 })
$(document).ready(function(){   
       //选择 body内的所有div元素.
      $('#btn1').click(function(){
          $('body div').css("background","#bbffaa");
      })
      //在body内的选择 元素名是div 的子元素.
      $('#btn2').click(function(){
          $('body > div').css("background","#bbffaa");
      })
      //选择 所有class为one 的下一个div元素.
      $('#btn3').click(function(){
          $('.one + div').css("background","#bbffaa");
      })
      //选择 id为two的元素后面的所有div兄弟元素.
      $('#btn4').click(function(){
           $('#two ~ div').css("background","#bbffaa");
      })
  });

