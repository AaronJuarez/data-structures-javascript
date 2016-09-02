var Stack = function() {

	var someInstance = Object.create(stackMethods);
	someInstance.storage = [];

	return someInstance;
};

var stackMethods = {

	push : function(value) {
		this.storage.push(value);
	},
	pop : function() {
		return this.storage.pop();
	},
	size : function() {
		return this.storage.length;
	}
};


