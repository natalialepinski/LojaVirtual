angular.module('storeApp')
	.controller('searchFormController', ['$scope', '$location', function($scope, $location) {
		this.submit = function() {
			$location.path('/search').search({ query : this.query });
		}
	}])