
<label class="img">
<img style="vertical-align:middle;cursor:pointer;height:55px;" class="verifyImg" src="/index.php?m=Home&amp;c=Users&amp;a=getVerify&amp;rnd=0.6884189643776111" title="刷新验证码" onclick="javascript:getVerify()">
</label>   


   <script>
   $(function(){
       getVerify();
       $('.form-actions').click(function(){login()});
       $(document).keypress(function(e) {
           if(e.which == 13) { 
               login(); 
           }
       });
   })
   function login(){
       var params = {};
       params.loginName = $.trim($('#loginName').val());
       params.loginPwd = $.trim($('#loginPwd').val());
       params.verify = $.trim($('#verfyCode').val());
       params.id = $('#id').val();
       if(params.loginName==''){
           Plugins.Tips({title:'信息提示',icon:'error',content:'请输入账号!',timeout:1000});
           $('#loginName').focus();
           return;
       }
       if(params.loginPwd==''){
           Plugins.Tips({title:'信息提示',icon:'error',content:'请输入密码!',timeout:1000});
           $('#loginPwd').focus();
           return;
       }
       if(params.verify==''){
           Plugins.Tips({title:'信息提示',icon:'error',content:'请输入验证码!',timeout:1000});
           $('#verfyCode').focus();
           return;
       }
       Plugins.waitTips({title:'信息提示',content:'正在登录，请稍后...'});
        $.post(Think.U("Admin/index/login"),params,function(data,textStatus){
            var json = WST.toJson(data);
            if(json.status=='1'){
                Plugins.setWaitTipsMsg({ content:'登录成功',timeout:1000,callback:function(){
                    location.href=Think.U("Admin/Index/index");
                }});
            }else if(json.status=='-2'){
                Plugins.closeWindow();
                Plugins.Tips({title:'信息提示',icon:'error',content:'验证码错误!',timeout:1000});
                getVerify();
            }else{
                Plugins.closeWindow();
                Plugins.Tips({title:'信息提示',icon:'error',content:'账号或密码错误!',timeout:1000});
                getVerify();
            }
        });
   }
   function getVerify() {
       $('.verifyImg').attr('src',Think.U('Admin/Index/getVerify','rnd='+Math.random()));
   }
   </script>
