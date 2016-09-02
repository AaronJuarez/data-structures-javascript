var Queue = function() {
  var someInstance = {};
  someInstance.storage = [];

  someInstance.enqueue = queueMethods.enqueue;
  someInstance.dequeue = queueMethods.dequeue;
  someInstance.size = queueMethods.size;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
	this.storage.push(value);
}

queueMethods.dequeue = function() {
	return this.storage.shift();
}

queueMethods.size = function() {
	return this.storage.length;
}


