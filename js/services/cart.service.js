angular.module('storeApp')
.service('cartService', [function() {
	var cart = []; 

	this.addProduct = function(product) {
		cart.push(product);
	}

	this.getCart = function() {
		return cart;
	}

	this.remove = function(product) {

	}
}])