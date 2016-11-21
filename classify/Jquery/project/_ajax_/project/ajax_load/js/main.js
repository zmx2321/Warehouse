$(function(){
	$('.button1').click(function(){
	    //console.log("%caaa","color:red");
	    $("#box").load("test1.html .aaa");	//用class筛选
	});

	$('.button2').click(function(){
	    //console.log("%caaa","color:red");
	    $("#box").load("test2.html");
	});
});
