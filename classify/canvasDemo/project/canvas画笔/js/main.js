 window.onload = function(){  
     //获取canvas画布  
     var canvas = document.getElementById('canvas');  
     //获取2d绘图环境  
     cxt = canvas.getContext('2d');  
        
     canvas.onmousedown = function(ev){  
         var ev = ev || window.event;  
         cxt.moveTo(ev.clientX-canvas.offsetLeft,ev.clientY-canvas.offsetTop);  
         document.onmousemove = function(ev){  
             var ev = ev || window.event;  
             //cxt.strokeStyle = 'red';  
             //cxt.lineWidth = 20;  
             cxt.lineTo(ev.clientX-canvas.offsetLeft,ev.clientY-canvas.offsetTop);  
             cxt.stroke();  
         };    
     };  
     document.onmouseup = function(){  
         document.onmousemove = null;  
         document.onload = null;     
         //cxt.clearRect(0,0,canvas.width,canvas.height);    
     };  
 };  