window.onload = function(){

}

$(function(){

});

var app = new Vue({
	el: '#app',
	data: {
		newItem: '',
		items: [
			{
				text: 'aaa',
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
			if (window.localStorage) {
			localStorage.setItem(items, arrDisplay);	
		} else {
			Cookie.write(items, arrDisplay);	
		}
		},
		addNew: function(){
			console.log(this.newItem);
			this.items.push({
				text: this.newItem,
				isFinished: false,
			});
			this.newItem = '';

		}

	}
});