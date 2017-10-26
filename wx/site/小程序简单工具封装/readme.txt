覆盖utils/util.js



例子1：

	var util = require('../../utils/util.js');
	var app=getApp();
	//基于class写法的
	var p=new util.Person();
	p.say();
	Page({
	  data: {
		logs: []
	  },
	  onLoad: function () {
		//发送GET只需要更改 method:'GET'
		util.ajax(app.rooturl+'home/index/index',{method:'POST',data:{age:20,name:'luyan'}}).
		then(function(data){
		   console.log(data);
		   return 'a';
		})
	   .then(function(data){
		  console.log(data);
		  return 'c';
	   }).then(function(data){
			console.log(data);
	   }).catch(error => console.log(error));
		
	  }
	})

例子2：
	var util = require('../../utils/util.js');
	var app=getApp();
	//基于class写法的
	var p=new util.Person();
	p.say();
	Page({
	  data: {
		logs: []
	  },
	  onLoad: function () {
		//发送GET只需要更改 method:'GET'
		util.ajax(app.rooturl+'home/index/index',{method:'GET',data:{age:20,name:'luyan'}}).
		then(function(data){
		   console.log(data);
		   return 'a';
		})
	   .then(function(data){
		  console.log(data);
		  return 'c';
	   }).then(function(data){
			console.log(data);
	   }).catch(error => console.log(error));
		
	  }
	})
	
	
例子3：默认是get
	
	var util = require('../../utils/util.js');
	var app=getApp();
	//基于class写法的
	var p=new util.Person();
	p.say();
	Page({
	  data: {
		logs: []
	  },
	  onLoad: function () {
		//发送GET只需要更改 method:'GET'
		util.ajax(app.rooturl+'home/index/index').
		then(function(data){
		   console.log(data);
		   return 'a';
		})
	   .then(function(data){
		  console.log(data);
		  return 'c';
	   }).then(function(data){
			console.log(data);
	   }).catch(error => console.log(error));
		
	  }
	})