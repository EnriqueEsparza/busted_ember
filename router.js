Busted.Router.map(function(){
  this.resource('posts', {path: '/'});
  this.resource('news');
  this.resource('about');
  this.resource('contact', function() {
    this.resource('phone');
    this.resource('email');
  });
});
