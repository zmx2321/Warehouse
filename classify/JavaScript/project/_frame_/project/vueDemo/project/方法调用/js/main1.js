window.onload = function(){
/*	if(typeof(Storage)!=="undefined") {
		localStorage.lastname="Smith";
		document.getElementById("result").innerHTML="Last name: " + localStorage.lastname;
	}
	else {
		document.getElementById("result").innerHTML="Sorry, your browser does not support web storage...";
	}*/
		
}

$(function(){

});

/*saveToLocalStore: function () {
	console.log("aaa");
}*/
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
			var io = this.newItem;
			console.log(io);
			//console.log(typeof this.newItem);

			this.items.push({
				text: this.newItem,
				isFinished: false,
			});
			this.newItem = '';
			localStorage.aaa=io;
			localStorageFun();
		},
		localStorageFun: function(){

		}
	}
});