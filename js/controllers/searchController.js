angular.module('storeApp')
	.controller('searchController', ['$scope', '$routeParams', 'productService', function($scope, $routeParams, productService){
		var products = $scope.products = productService.getProducts()
		.filter(function(product) {
			if(product.category.toLowerCase() === $routeParams.query.toLowerCase()) {
				return true;
			} else {
				return false;
			}
		});
	}])