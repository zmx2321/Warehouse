$(function(){
	$(".button").click(function(){
		$("#box").load("process.php",{
			url:"aaa"
		},function(response,status,xhr){
			/*console.log(response);
			console.log(status);
			console.log(xhr);
			if(status=='success'){
				alert("成功");
			}*/
			/*alert(xhr.status);*/
		});
	});
});



window.onload=function(){
    var odiv=document.getElementById('div1');
    var abtn=odiv.getElementsByTagName('input');
    var adiv=odiv.getElementsByTagName('div');

    for(var i=0;i<abtn.length;i++){
        abtn[i].index=i;
        abtn[i].onmouseover=function(){
            //alert(this.value)
            for(var i=0;i<abtn.length;i++){
                abtn[i].className='';
                adiv[i].style.display='none';
            }
            this.className='active';
            adiv[this.index].style.display='block';
        };
    }
};
