angular.module('storeApp')
	.controller('cartController', ['$scope', 'productService', 'cartService', function($scope, productService, cartService) {
		var products = $scope.products = cartService.getCart();
	}])