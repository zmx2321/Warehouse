var app = angular.module("myApp",[]);

app.controller('simpleController',function($scope)

{

$scope.sites = [

              {name:'百度',path:'www.baidu.com'},

              {name:'新浪',path:'www.sina.com.cn'},

              {name:'腾讯',path:'www.qq.com'}

]

});