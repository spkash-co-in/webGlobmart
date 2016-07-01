angular
  .module('globMartApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
            .when('/prices/:productName', {
          	  templateUrl: 'views/prices.html',
          	  controller: 'PriceCtrl'
            })
      .otherwise({
        redirectTo: '/'
      });
  });