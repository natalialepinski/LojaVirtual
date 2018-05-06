angular.module('storeApp', ['ngRoute'])
	.service('productService', [function() {
		this.getProducts = function() {
			return [{
				id: 1,
				name: 'Mochila Rosa',
				description: '100% Poliéster',
				fulldescription: 'Produzido em Poliéster. Possui alças e costas espumadas que proporciona maior conforto para os ombros, bolso frontal com fechamento por zíper, compartimento para guardar seu laptop.',
				price: 50,
				photos: [
					'img/mochila_magenta.png'
				],
				quantity: 10
			},{
				id: 2,
				name: 'Mochila Azul',
				description: '100% Poliéster',
				fulldescription: 'Produzido em Poliéster. Possui alças e costas espumadas que proporciona maior conforto para os ombros, bolso frontal com fechamento por zíper, compartimento para guardar seu laptop.',
				price: 50,
				photos: [
					'img/mochila_azul.png'
				],
				quantity: 0
			},{
				id: 3,
				name: 'Mochila Branca',
				description: '100% Poliéster',
				fulldescription: 'Produzido em Poliéster. Possui alças e costas espumadas que proporciona maior conforto para os ombros, bolso frontal com fechamento por zíper, compartimento para guardar seu laptop.',
				price: 50,
				photos: [
					'img/mochila_branca.png'
				],
				quantity: 20
			},{
				id: 4,
				name: 'Carteira Feminina',
				description: 'Porta Celular',
				fulldescription: 'Produzida em couro sintético. Possui bolso interno com zíper e divisora para cartões de credito, com alça de mão, porta celular interno e seu fechamento por botão.',
				price: 25,
				photos: [
					'img/carteira_preta.png'
				],
				quantity: 50
			},{
				id: 5,
				name: 'Carteira Masculina',
				description: 'Produzida em couro',
				fulldescription: 'Produzida em couro. Possui porta níquel, porta notas e porta documentos.',
				price: 45,
				photos: [
					'img/carteira_couro.png'
				],
				quantity: 15
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
	.controller('cartController', ['$scope', function($scope) {
		
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

