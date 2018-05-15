angular.module('storeApp')
	.controller('productController', ['$scope', 'productService', '$routeParams', 'cartService', function($scope, productService, $routeParams, cartService) {
		var product = $scope.product = productService.getProducts().find(function(product){
			return product.id === parseInt($routeParams.id);
		}); 

		$scope.addItemToCart = function(product) {
			cartService.addProduct(product);
		}
	}])