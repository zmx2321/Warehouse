$(function(){
    $(".button").click(function(){
        $.ajax({
            type:'POST',
            url:'user.php',
            data:{
                user:$("form input[name=user]").val(),
                email:$("form input[name=email]").val()
            },
            success:function(response,status,xhr){
                $("#box").html(response);
            }
        });
    });
});