var app = new Vue({
	el: '#app',
	data: {
		newItem: '',
		items: [
			{
				text: 'aaa',	//app.items[0].text
				isFinished: false
			},
			{
				text: 'bbb',
				isFinished: false
			}
		]
	},
	methods: {
		toogleClass: function(item){
			item.isFinished = !item.isFinished;
		},
		addNew: function(){
			var io =  this.newItem;
			var k = "d";
			//var val;

			this.items.push({
				text: this.newItem,
				isFinished: false,
			});
			this.newItem = '';
			//localStorage.key = val;

			localStorage.k=io;
			localStorage.getItem("aa");
			console.log(localStorage.length);
			//console.log(localStorage.key(4));
			/*$("ul").append(`
				<p>${localStorage.key(4)}</p>
				<p>${localStorage.getItem(4)}</p>
			`);*/
			//localStorage.clear();
		},
	}
});
//app.localStorageFun();