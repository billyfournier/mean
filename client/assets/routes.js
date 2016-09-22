console.log('****  routes.js  ****');
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/login.html',
      controller: 'usersController as RC',
    })
    .when('/user',{
      templateUrl: 'partials/main.html',
      contoller: 'usersController as RC'
    })
    .otherwise({
      redirectTo: '/'
    });
});
