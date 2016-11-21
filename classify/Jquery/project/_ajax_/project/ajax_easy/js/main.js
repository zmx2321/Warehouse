$('input[type=button]').click(function(){
    var ul = $('#info>ul');
    $.ajax({
        url:'process.php?'+Math.random(),
        type:'get',
        success:function(data){
	        var result = eval(data);
	        for(var i=0;i<result.length;i++){
	            ul.append('<li>'+result[i].title+'<span>'+result[i].publicTime+'</span><p>'+result[i].content+'</p></li>');
	        }
        }   
    });
});