var app99 = new Vue({
	el: '#app99',
	data: {
		newItem: '',
		itms: [
			{
				txt: 'cccccc',
				isFinished: true
			},
			{
				txt: 'rrrrrr',
				isFinished: false
			}
		]
	},
	methods: {
		toogleClass: function(itm){
			itm.isFinished = !itm.isFinished;
		},
		addNew: function(){
			this.itms.push({
				txt: this.newItem,
				isFinished: false
			});
			console.log(this.newItem);
			this.newItem = '';
		}
	}
});