var Stack = function() {
	var someInstance = Object.create(Stack.prototype);
	someInstance.store = [];

	return someInstance;
};

var stackMethods = {};

Stack.prototype.push = function(value) {
	this.store.push(value);
}

Stack.prototype.pop = function() {
	return this.store.pop();
}

Stack.prototype.size = function() {
	return this.store.length;
}




