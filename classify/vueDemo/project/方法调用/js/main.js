var v = new Vue({
  methods: {
    a: function() {
      console.log('func a run !');
      this.b();
    },
    b: function() {
      console.log('func b run !');
    }
  }
});

v.a();