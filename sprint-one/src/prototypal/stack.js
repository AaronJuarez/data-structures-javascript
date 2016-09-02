var Stack = function() {
	var someInstance = Object.create(Stack.prototype);
	someInstance.storage = [];

	return someInstance;
};

var stackMethods = {};

Stack.prototype.push = function(value) {
	this.storage.push(value);
}

Stack.prototype.pop = function() {
	return this.storage.pop();
}

Stack.prototype.size = function() {
	return this.storage.length;
}




