angular.module('LojaVirtual', [''])
	.config(['$routeProvider', function(){
		$routeProvider.
			when('/home', {
				templateUrl: 'partials/home.html',
				controller: 'storeController'
			}).
			when('/produtos', {
				templateUrl: 'partials/produtos.html',
				controller: 'storeController'
			}).
			when('/carrinho', {
				templateUrl: 'partials/carrinho.html',
				controller: 'storeController'
			}).
			otherwise({
				redirectTo: '/home'
			});
	}])
	.factory("DataService", function(){
		
		// create a store
		var myHome = new home();

		// create a shopping cart
		var myCart = new carrinho("LojaVirtual");

		return {
			home: myHome,
			carrinho: myCart,
		};
	});

