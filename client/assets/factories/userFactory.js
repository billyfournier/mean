console.log('userFactory');
myApp.factory('userFactory', function($http,$routeParams) {

  var someVariables = [];


  function userFactory(){
    var _this = this;
    var user = null;

    _this.create = function(user,callback){
      console.log('userFactory.create()');

      $http.post('/user', user).then(function(returned_data){
        if(returned_data.data.user){ user = returned_data.data.user; }
        else { user = null; }
      });

      callback(user);
    };

    _this.logout = function(){
      console.log('factory logout()');
      user = null;
      $location.path('/');
    }

  }
  return new userFactory();
});
