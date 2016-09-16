//<![CDATA[
  $(document).ready(function(){
      //重置表单元素
      $(":reset").click(function(){
          setTimeout(function() {
            countChecked();
            $("select").change();
          },0);
      });


      //对表单内 可用input 赋值操作.
      $('#btn1').click(function(){
          $("#form1 input:enabled").val("这里变化了！"); 
          return false;
      })
      //对表单内 不可用input 赋值操作.
      $('#btn2').click(function(){
          $("#form1 input:disabled").val("这里变化了！");
          return false;
      })


      //使用:checked选择器，来操作多选框.
        $(":checkbox").click(countChecked);

        function countChecked() {
          var n = $("input:checked").length;
          $("div").eq(0).html("<strong>有"+n+" 个被选中!</strong>");
        }

        countChecked();//进入页面就调用.

     //使用:selected选择器，来操作下拉列表.
        $("select").change(function () {
              var str = "";
              $("select :selected").each(function () {
                    str += $(this).text() + ",";
              });
              $("div").eq(1).html("<strong>你选中的是："+str+"</strong>");
        }).trigger('change');
        // trigger('change') 在这里的意思是：
        // select加载后，马上执行onchange.
        // 也可以用.change()代替.
  });
  //]]>
