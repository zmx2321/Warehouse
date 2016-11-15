var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',	//在console输入app.message = '123'
  }
});

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date(),	//在console输入app2.message = 'some new message'
  }
});

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true	//false则隐藏	//app3.seen = false
  }
});

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
});

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
});

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
});

var example1 = new Vue({
  el: '#example-1',
  data: {
    counter: 0
  }
})