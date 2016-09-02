var Stack = function() {
	this.store = [];
};

Stack.prototype.push = function(value) {
	this.store.push(value);
}

Stack.prototype.pop = function() {
	return this.store.pop();
}

Stack.prototype.size = function() {
	return this.store.length;
}


