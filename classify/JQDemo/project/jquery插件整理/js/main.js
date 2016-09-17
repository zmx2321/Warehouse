$(function(){
      $(document).mousemove(function(e){
          $("span").text("X: " + e.pageX + ", Y: " + e.pageY);
      });
});
