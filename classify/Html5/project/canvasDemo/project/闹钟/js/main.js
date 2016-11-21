   var canvas=document.getElementById('clock');    //获取ID  
    var cxt=canvas.getContext('2d');  
      
      
function drawClock(){  
    cxt.clearRect(0,0,500,500); //清除画布  
      
    var now=new Date();  
    var sec=now.getSeconds();  
    var min=now.getMinutes();  
    var hour=now.getHours();  
    var hour=hour+min/60;  
    //hour=hour>12?hour=12:hour; //进制转换  
      
      
//表盘（蓝色）  
    cxt.lineWidth=10;  
    cxt.strokeStyle="blue";  
    cxt.beginPath();  
    cxt.arc(250,250,200,0,360,false);   //false逆时针，true顺时针  
    cxt.stroke();  
    cxt.closePath();  
//刻度（黑色）  
    //时刻度  
    for(var i=0;i<12;i++){  
        cxt.save();     //保存当前状态  
        cxt.lineWidth=7;  
        cxt.strokeStyle="#000";  
        cxt.translate(250,250);     //先设置原点  
        cxt.rotate(i*30*Math.PI/180);   //再设置旋转角度   弧度=角度*Math.PI/180  
        cxt.beginPath();    //画线  
        cxt.moveTo(0,-170);  
        cxt.lineTo(0,-190);  
        cxt.closePath();  
        cxt.stroke();  
        cxt.restore();  //恢复原点  
    }  
    //分刻度  
    for(var i=0;i<60;i++){  
        cxt.save();   
        cxt.lineWidth=5;  
        cxt.strokeStyle="#000";  
        cxt.translate(250,250);   
        cxt.rotate(i*6*Math.PI/180);  
        cxt.beginPath();  
        cxt.moveTo(0,-180);  
        cxt.lineTo(0,-190);  
        cxt.closePath();  
        cxt.stroke();  
        cxt.restore();    
    }  
//时针（黑色）  
    cxt.save();     //设置原点  
    cxt.lineWidth=7;    //设置时针风格  
    cxt.strokeStyle="#000";  
    cxt.translate(250,250);     //设置原点  
    cxt.rotate(hour*30*Math.PI/180);  
    cxt.beginPath();    //画线  
    cxt.moveTo(0,-120);  
    cxt.lineTo(0,10);  
    cxt.closePath();  
    cxt.stroke();  
    cxt.restore();      //设置原点  
//分针（黑色）  
    cxt.save();       
    cxt.lineWidth=5;      
    cxt.strokeStyle="#000";  
    cxt.translate(250,250);       
    cxt.rotate(min*6*Math.PI/180);  
    cxt.beginPath();      
    cxt.moveTo(0,-160);  
    cxt.lineTo(0,10);  
    cxt.closePath();  
    cxt.stroke();  
    cxt.restore();  
//秒针（红色）  
    cxt.save();       
    cxt.lineWidth=3;      
    cxt.strokeStyle="#f00";  
    cxt.translate(250,250);       
    cxt.rotate(sec*6*Math.PI/180);  
    cxt.beginPath();      
    cxt.moveTo(0,-170);  
    cxt.lineTo(0,20);  
    cxt.closePath();  
    cxt.stroke();  
    cxt.restore();  
}  
      
//使用setInterval,让针动起来  
    setInterval(drawClock,1000);  