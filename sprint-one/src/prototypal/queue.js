var Queue = function() {
  var someInstance = Object.create(Queue.prototype);
  someInstance.storage = [];

  return someInstance;
};

var queueMethods = {};

Queue.prototype.enqueue = function(value) {
	this.storage.push(value);
}

Queue.prototype.dequeue = function() {
	return this.storage.shift();
}

Queue.prototype.size = function() {
	return this.storage.length;
}

