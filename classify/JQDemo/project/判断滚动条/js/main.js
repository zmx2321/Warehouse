$(function(){
  $(window).scroll(function(){
      if ($(document).scrollTop() <= 0) {
            alert('滚动条已滚到顶部');
        }

        if ($(document).scrollTop() >= $(document).height() - $(window).height()) {
            alert('滚动条已滚到底部');
        }
  });
});
