var app99 = new Vue({
	el: '#app99',
	data: {
		newItem: '',
		tscs: 'ttt',

		itms: [
			{
				txt: 'cccccc',	//app.items[0].text
				isFinished: true,
				isPushc: false
			},
			{
				txt: 'rrrrrr',
				isFinished: false,
				isPushc: false
			}
		]
	},
	methods: {
		toogleClass: function(itm){
			itm.isFinished = !itm.isFinished;
			itm.isPushc = !itm.isPushc;
		},
		addNew: function(){
			this.itms.push({
				txt: this.newItem,
				isFinished: false,
				isPushc: false
			});
			console.log(this.newItem);
			this.newItem = '';
		}
	}
});