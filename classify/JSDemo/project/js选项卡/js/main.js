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
