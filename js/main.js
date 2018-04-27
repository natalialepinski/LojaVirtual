angular.module('storeApp', [''])
	.config(['$routeProvider', function(){
		$routeProvider.
			when('/home', {
				templateUrl: 'partials/home.html',
				controller: 'storeController',
				controllerAs: ''
			}).
			when('/products', {
				templateUrl: 'partials/products.html',
				controller: 'productsController'
				controllerAs: ''
			}).
			when('/product', {
				templateUrl: 'partials/product.html',
				controller: 'productController',
				controllerAs: ''
			}).
			when('/cart', {
				templateUrl: 'partials/cart.html',
				controller: 'cartController'
				controllerAs: ''
			}).
			otherwise({
				redirectTo: '/home'
			});
	}]);

