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
});

var app1 = new Vue({
  el: '#app1',
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
        isFinished: true, //app5.tems[0].isFinished
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
        isFinished: true
      });
      console.log(this.newItem);
      this.newItem = '';
    }
  }
});