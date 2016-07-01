angular.module('globMartApp')
  .controller('MainCtrl', function ($scope, $http) {
	  $http({
          method: 'GET',
          url: '/products'
      }).then(function(response) {
    	  $scope.products = response.data;
      }, function(response) {
    	  console.error('Error requesting products');
      });
  });


angular.module('globMartApp')
  .controller('PriceCtrl', function ($scope, $http, $routeParams) {
	  $http({
          method: 'GET',
          url: '/prices?name=' + $routeParams.productName
      }).then(function (response) {
    	  $scope.prices = response.data;
      }, function(response) {
    	  console.error('Error requesting participants.')
      });
  });