$(function(){
	$(".button").click(function(){
		$.getJSON("test.json",function(response,status,xhr){
			$("#box").html(response[0].url);
		});
	});
});