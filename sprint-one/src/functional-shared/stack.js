var Stack = function() {
	var someInstance = {};
	someInstance.storage = [];

	someInstance.push = stackMethods.push;
	someInstance.pop = stackMethods.pop;
	someInstance.size = stackMethods.size;

	return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
	this.storage.push(value);
}

stackMethods.pop = function () {
	return this.storage.pop();
}

stackMethods.size = function() {
	return this.storage.length;
}


