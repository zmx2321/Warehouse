//gamegame.js
var app=getApp();
var basenum=[1,2,3,4,5,6,7,8,9];
var restart=function(){

}
Page({
  data:{
    LuckyValue:"",
    toast1Hidden:true,
    userLucky:0,
    sysLucky:0,
    count:3,
    nums:[4,2,3,1,6,7,8,9,5],
    numscopy:[4,2,3,1,6,7,8,9,5],
    show:[true,true,true,true,true,true,true,true,true],
    // text:"这是一个页面"
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var curnum=basenum.slice();
    var newNums=new Array(9);
    for(var i=0;i<9;i++){
      console.log("length:"+curnum)
      var r=(Math.floor(Math.random()*10))%curnum.length;
      newNums[i]=curnum[r];
      curnum.splice(r,1) ;
    }
    this.data.nums=newNums.slice();
    this.data.numscopy=newNums.slice();
    this.setData({
      nums:this.data.nums
    });
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
    
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  restart_btn:function(event){
    //重新开始游戏
    for(var i=0;i<this.data.show.length;i++){
       this.data.show[i]=true;
    }
    this.data.sysLucky=0;
    this.data.userLucky=0;
    this.data.count=3;
    var curnum=basenum.slice();
    var newNums=new Array(9);
    for(var i=0;i<9;i++){
      console.log("length:"+curnum)
      var r=(Math.floor(Math.random()*10))%curnum.length;
      newNums[i]=curnum[r];
      curnum.splice(r,1) ;
    }
    this.data.nums=newNums.slice();
    this.data.numscopy=newNums.slice();
    this.setData({
      nums:this.data.nums,
      show:this.data.show,
      count:this.data.count
    });

  },
  closeToast:function(){
    //关闭提示
    this.data.toast1Hidden=true;
    this.setData({toast1Hidden:this.data.toast1Hidden});
  },
user_Click:function(event){
  //点击三次
    if(this.data.count<=0){
      //计算数据// 不会有数据了
      return;
  }
  var id=parseInt(event.target.id);
  if(this.data.show[id]){
      this.data.show[id]=false;
      console.log(this.data.show);
      console.log(event);
      this.data.userLucky+=this.data.nums[id];
      this.setData({
      show:this.data.show
  })
  this.data.numscopy.splice(id,1);
  this.data.count--;
  if(this.data.count<=0){
      //计算数据
      for(var i=0;i<3;i++){
      var r=(Math.floor(Math.random()*10))%this.data.numscopy.length;
      this.data.sysLucky+=this.data.numscopy[r];
      this.data.numscopy.splice(r,1);
    }

      console.log("end userLucky:"+this.data.userLucky);
      console.log("end sysLucky:"+this.data.sysLucky);
      var lucky_Value=this.data.userLucky-this.data.sysLucky;
      if(lucky_Value==0){
          //60分运气值
           console.log("end userLucky:"+lucky_Value+"  "+this.data.toast1Hidden);
           this.data.LuckyValue="你好60分运气值";
           this.data.toast1Hidden=false;
           this.setData({toast1Hidden:this.data.toast1Hidden,LuckyValue:this.data.LuckyValue});
      }else if(lucky_Value>0){
            //正值
                    if(lucky_Value>0&&lucky_Value<=3){
                      console.log("end userLucky:"+lucky_Value+"  "+this.data.toast1Hidden);
                      this.data.LuckyValue="你好！运气值一般";
                      this.data.toast1Hidden=false;
                      this.setData({toast1Hidden:this.data.toast1Hidden,LuckyValue:this.data.LuckyValue});
                    }else if(lucky_Value>3&&lucky_Value<=6){
                      console.log("end userLucky:"+lucky_Value+"  "+this.data.toast1Hidden);
                      this.data.LuckyValue="你好！运气比一般好";
                      this.data.toast1Hidden=false;
                      this.setData({toast1Hidden:this.data.toast1Hidden,LuckyValue:this.data.LuckyValue});
                    }else if(lucky_Value>6&&lucky_Value<=9){
                      console.log("end userLucky:"+lucky_Value+"  "+this.data.toast1Hidden);
                      this.data.LuckyValue="你好！运气比一般好还好点";
                      this.data.toast1Hidden=false;
                      this.setData({toast1Hidden:this.data.toast1Hidden,LuckyValue:this.data.LuckyValue});
                    }else if(lucky_Value>9&&lucky_Value<=12){
                      console.log("end userLucky:"+lucky_Value+"  "+this.data.toast1Hidden);
                      this.data.LuckyValue="你好！运气很好";
                      this.data.toast1Hidden=false;
                      this.setData({toast1Hidden:this.data.toast1Hidden,LuckyValue:this.data.LuckyValue});
                    }else if(lucky_Value>12&&lucky_Value<=15){
                      console.log("end userLucky:"+lucky_Value+"  "+this.data.toast1Hidden);
                      this.data.LuckyValue="你好！运气比很好还好";
                      this.data.toast1Hidden=false;
                      this.setData({toast1Hidden:this.data.toast1Hidden,LuckyValue:this.data.LuckyValue});
                    }else if(lucky_Value>15&&lucky_Value<18){
                      console.log("end userLucky:"+lucky_Value+"  "+this.data.toast1Hidden);
                      this.data.LuckyValue="你好！你运气报表";
                      this.data.toast1Hidden=false;
                      this.setData({toast1Hidden:this.data.toast1Hidden,LuckyValue:this.data.LuckyValue});
                    }else{
                      console.log("end userLucky:"+lucky_Value+"  "+this.data.toast1Hidden);
                      this.data.LuckyValue="你居然完成了系统都做不到的运气值，成功的打破了系统最高记录";
                      this.data.toast1Hidden=false;
                      this.setData({toast1Hidden:this.data.toast1Hidden,LuckyValue:this.data.LuckyValue});
                    }
                   
           
             
      }else{
          //负值

           if(lucky_Value>=-3&&lucky_Value<0){
                        console.log("end userLucky:"+lucky_Value+"  "+this.data.toast1Hidden);
                        this.data.LuckyValue="你好，你运气刚好不及格";
                        this.data.toast1Hidden=false;
                        this.setData({toast1Hidden:this.data.toast1Hidden,LuckyValue:this.data.LuckyValue});
                    }else if(lucky_Value>=-6&&lucky_Value<-3){
                       console.log("end userLucky:"+lucky_Value+"  "+this.data.toast1Hidden);
                        this.data.LuckyValue="你好，你运气比刚好不及格还差点";
                        this.data.toast1Hidden=false;
                        this.setData({toast1Hidden:this.data.toast1Hidden,LuckyValue:this.data.LuckyValue});
                    }else if(lucky_Value>=-9&&lucky_Value<-6){
                       console.log("end userLucky:"+lucky_Value+"  "+this.data.toast1Hidden);
                        this.data.LuckyValue="你好，你运气比刚好不及格还差比较多";
                        this.data.toast1Hidden=false;
                        this.setData({toast1Hidden:this.data.toast1Hidden,LuckyValue:this.data.LuckyValue});
                    }else if(lucky_Value>=-12&&lucky_Value<-9){
                      console.log("end userLucky:"+lucky_Value+"  "+this.data.toast1Hidden);
                        this.data.LuckyValue="你好，你今天运气不行";
                        this.data.toast1Hidden=false;
                        this.setData({toast1Hidden:this.data.toast1Hidden,LuckyValue:this.data.LuckyValue});
                    }else if(lucky_Value>=-15&&lucky_Value<-12){
                        console.log("end userLucky:"+lucky_Value+"  "+this.data.toast1Hidden);
                        this.data.LuckyValue="你好，你今天比运气不行还差";
                        this.data.toast1Hidden=false;
                        this.setData({toast1Hidden:this.data.toast1Hidden,LuckyValue:this.data.LuckyValue});
                    }else if(lucky_Value>=-15&&lucky_Value<-18){
                       console.log("end userLucky:"+lucky_Value+"  "+this.data.toast1Hidden);
                        this.data.LuckyValue="你好，你今天估计踩到了狗屎，运气差到极点";
                        this.data.toast1Hidden=false;
                        this.setData({toast1Hidden:this.data.toast1Hidden,LuckyValue:this.data.LuckyValue});
                    }else{
                        console.log("end userLucky:"+lucky_Value+"  "+this.data.toast1Hidden);
                        this.data.LuckyValue="你居然完成了系统都做不到的运气值，你今天估计是你今年最倒霉的一次了了。";
                        this.data.toast1Hidden=false;
                        this.setData({toast1Hidden:this.data.toast1Hidden,LuckyValue:this.data.LuckyValue});
                    }
      }
    
  }
  }
 
}
})