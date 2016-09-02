var Queue = function() {
  this.storage = [];
};

Queue.prototype.enqueue = function(value) {
	this.storage.push(value);
}

Queue.prototype.dequeue = function() {
	return this.storage.shift();
}

Queue.prototype.size = function(){
	return this.storage.length;
}


