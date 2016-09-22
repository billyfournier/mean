myApp.controller('usersController', function($scope, $routeParams, $location, userFactory) {
  var self = this;
  console.log('usersContoller()');
  console.log(userFactory.user);
  if(userFactory.user){ $location.path('/user');}


  self.logged_user = null;
  self.user = null;

  self.register = function(){
    console.log('usersController.register()');
    if(this.user.pwd == this.user.pwdc){
      userFactory.create(this.user, function(logged_user){
        self.logged_user = logged_user;
      });
      this.user = null;
      $location.path('#/user')
    }
  }

  self.login = function(){
    console.log('login');
    $location.path('/user');
  }

  self.logout = function(){
    console.log('logout');
    userFactory.logout();
  }

});
