angular.module('storeApp')
	.controller('productsController', ['$scope', 'productService', function($scope, productService) {
		var products = $scope.products = productService.getProducts();
	}])