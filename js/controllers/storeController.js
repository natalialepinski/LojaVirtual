angular.module('storeApp')
	.controller('storeController', ['$scope', 'productService', function($scope, productService) {
		var products = $scope.products = productService.getProducts();
	}])