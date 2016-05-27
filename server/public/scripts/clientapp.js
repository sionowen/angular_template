var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/home.html',
      controller: "HomeController"
    })
    .when('/other', {
      templateUrl: '/views/other.html',
      controller: "OtherController"
    })
    .otherwise({
      redirectTo: 'home'
    })
}]);

var drinks = [
  { 'name': 'Coke', 'quantity': 2 },
  { 'name': 'Red Bull', 'quantity': 6 }
];

var currentDrinks = _.pluck(drinks, 'name');
console.log("this ran", currentDrinks);
// → [‘Coke’, ‘Red Bull’]
