window.onload = function(){  
//获取canvas元素,并获取2d绘图环境  
    var cxt=document.getElementById('canvas').getContext('2d');  
      
//轨道  
    function drawTrack(){  
        for(var i=0;i<8;i++){  
            cxt.beginPath();  
            cxt.arc(500,500,(i+1)*50,0,360,false);  
            cxt.closePath();  
            //设置笔触颜色  
            cxt.strokeStyle='#fff';  
            cxt.stroke();  
        }  
    }  
    drawTrack();  
//星球  
    function Star(x,y,radius,cycle,scolor,ecolor){  
    //画出星球需要哪些属性  
        //星球的坐标  
        this.x=x;  
        this.y=y;  
        //星球的半径  
        this.radius=radius;  
        //公转周期  
        this.cycle=cycle;  
        //星球的颜色（开始色和结束色）  
        this.scolor=scolor;  
        this.ecolor=ecolor;  
        //新建一个渐变颜色空对象  
        this.color=null;  
        //设置一个计时器  
        this.time=0;  
        this.draw=function(){  
            //保存之前的画布内容  
            cxt.save();  
            //重置原点  
            cxt.translate(500,500);  
            //设置旋转角度(角度*math.PI/180)  
            cxt.rotate(this.time*(360/this.cycle)*Math.PI/180);  
            //画星球  
            cxt.beginPath();  
            cxt.arc(this.x,this.y,this.radius,0,360,false);  
            cxt.closePath();  
            //设置星球的填充颜色  
            //新建渐变对象  
            this.color = cxt.createRadialGradient(this.x,this.y,0,this.x,this.y,this.radius);  
            //设置渐变效果  
            this.color.addColorStop(0,this.scolor);//渐变开始点  
            this.color.addColorStop(1,this.ecolor);//渐变结束点  
            cxt.fillStyle=this.color;  
            cxt.fill();//填充星球  
              
            //恢复之前保存的画布内容  
            cxt.restore();  
              
            //执行完毕之后时间增加  
            this.time+=1;  
        }  
    }  
      
    //创建一个太阳对象的构造函数  
    function Sun(){  
        Star.call(this,0,0,20,0,'#f00','#f90');  
    }  
      
    //创建一个水星对象的构造方法  
    function Mercury(){  
        Star.call(this,0,-50,10,87.70,'#a69697','#5c3e40');  
    }  
      
    //创建一个金星对象的构造方法  
    function Venus(){  
        Star.call(this,0,-100,10,244.701,'#c4bbac','#1f1315');  
    }  
      
    //创建一个地球对象的构造方法  
    function Earth(){  
        Star.call(this,0,-150,10,365.224,'#78b1e8','#050c12');  
    }  
      
    //创建一个火星对象的构造方法  
    function Mars(){  
        Star.call(this,0,-200,10,686.98,'#cec9b6','#76422d');  
    }  
      
    //创建一个木星对象的构造方法  
    function Jupiter(){  
        Star.call(this,0,-250,10,4332.589,'#c0a48e','#322222');  
    }  
      
    //创建一个土星对象的构造方法  
    function Saturn(){  
        Star.call(this,0,-300,10,10759.5,'#f7f9e3','#5c4533');  
    }  
      
    //创建一个天王星对象的构造方法  
    function Uranus(){  
        Star.call(this,0,-350,10,30799.095,'#a7e1e5','#19243a');  
    }  
      
    //创建一个天王星对象的构造方法  
    function Neptune(){  
        Star.call(this,0,-400,10,60152,'#0661b2','#1e3873');  
    }  
      
    var sun=new Sun();  
    var water=new Mercury();  
    var jinxing=new Venus();  
    var diqiu=new Earth();  
    var huoxing=new Mars();  
    var muxing=new Jupiter();  
    var tuxing=new Saturn();  
    var tianwangxing=new Uranus();  
    var haiwangxing=new Neptune();  
      
    function move(){  
        //清除画布  
        cxt.clearRect(0,0,1000,1000);  
        //画出轨道  
        drawTrack();  
        //画出每个星球  
        sun.draw();  
        water.draw();  
        jinxing.draw();  
        diqiu.draw();  
        huoxing.draw();  
        muxing.draw();  
        tuxing.draw();  
        tianwangxing.draw();  
        haiwangxing.draw();  
    }  
    //使各星球运转  
    setInterval(move,15);  
};  