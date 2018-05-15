angular.module('storeApp', ['ngRoute'])
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
			when('/search', {
				templateUrl: 'partials/search.html',
				controller: 'searchController'
			}).
			when('/checkout', {
				templateUrl: 'partials/checkout.html',
				controller: 'checkoutController'
			}).
			otherwise({
				redirectTo: '/home'
			});
		$locationProvider.html5Mode(true);
	}]);

