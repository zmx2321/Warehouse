$(function(){
	$(".button").click(function(){
		$.get("process.php",{
			url: Math.random(),
		},function(response,status,xhr){
			$("#box").html(response);
		});
	});
});