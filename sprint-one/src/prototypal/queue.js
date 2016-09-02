var Queue = function() {

	var someInstance = Object.create(queueMethods);
	someInstance.storage = [];

	return someInstance;
};

var queueMethods = {

	enqueue : function(value) {
		this.storage.push(value);
	},
	dequeue : function() {
		return this.storage.shift();
	},
	size : function() {
		return this.storage.length;
	}

};

