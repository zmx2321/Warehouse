var app = new Vue({
	el: '#app',
	data: {
		message: "aaa",
		a: "984",
		b: [],
		c: 456
	},
	methods: {
		doSomething: function(){
			this.a ++;
		}
	},
	watch: {
		'a': function(val,oldVal){
			console.log(val,oldVal);
		}
	}
});

var app2 = new Vue({
	el: '#app2',
	aaa: 'aaa',
	data: {
		isShow: true,
		items: [
			{
				label: 'apple'
			},
			{
				label: 'banana'
			},
		]
	},
});

var app3 = new Vue({
	el: '#app3',
	data: {
		isActive: false,
  		hasError: true
	}
});

var app5 = new Vue({
	el: '#app5',
	data: {
		tems: [
			{
				txt: 'qqqqq',
				isFinished: true,	//app5.tems[0].isFinished
			},
			{
				txt: 'wwwww',
				isFinished: false,
			}
		]
	},
	methods: {
		toogleClass: function(tem){
			tem.isFinished = !tem.isFinished
			console.log(tem.isFinished);
		}
	}
});

var app6 = new Vue({
	el: '#app6',
	data: {
		aaa: 'bbb',
		newItem: '',
	},
	methods: {
		addNew: function(){
			console.log(this.newItem);
			this.newItem = '';
		}
	}
});