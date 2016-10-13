$(function(){
	$(".button").click(function(){
		$.post("test.json",function(response,status,xhr){
			$("#box").html(response[0].url);
		});
	});
});