var Stack = function() {
	this.storage = [];
};

Stack.prototype.push = function(value) {
	this.storage.push(value);
}

Stack.prototype.pop = function() {
	return this.storage.pop();
}

Stack.prototype.size = function() {
	return this.storage.length;
}


