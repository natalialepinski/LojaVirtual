angular.module('storeApp', ['ngRoute'])
	.service('productService', [function() {
		this.getProducts = function() {
			return [{
				id: 1,
				name: 'Mochila Magenta',
				description: 'xxxxxxxxxxxx',
				price: 20,
				photos: [
					'img/mochila_magenta.png'
				],
				quantity: 10
			}, {
				id: 2,
				name: 'Mochila Magenta',
				description: 'xxxxxxxxxxxx',
				price: 20,
				photos: [
					'img/mochila_magenta.png'
				],
				quantity: 0
			}];
		}
	}])
	.controller('storeController', ['$scope', 'productService', function($scope, productService) {
		var products = $scope.products = productService.getProducts();
	}])
	.controller('productController', ['$scope', 'productService', '$routeParams', function($scope, productService, $routeParams) {
		var product = $scope.product = productService.getProducts().find(function(product){
			return product.id === parseInt($routeParams.id);
		}); 
	}])
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
		$routeProvider.
			when('/home', {
				templateUrl: 'partials/home.html',
				controller: 'storeController'
			}).
			when('/products', {
				templateUrl: 'partials/products.html',
				controller: 'productsController'
			}).
			when('/product/:id', {
				templateUrl: 'partials/product.html',
				controller: 'productController'
			}).
			when('/cart', {
				templateUrl: 'partials/cart.html',
				controller: 'cartController'
			}).
			otherwise({
				redirectTo: '/home'
			});
		$locationProvider.html5Mode(true);
	}]);

