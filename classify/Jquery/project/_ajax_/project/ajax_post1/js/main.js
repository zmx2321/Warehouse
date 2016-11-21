$(function(){
	$(".button").click(function(){
		$.post("process.php","url=aaa",function(response,status,xhr){
			$("#box").html(response);
		});
	});
});