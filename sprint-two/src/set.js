var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {

	if(!this.contains(item)) {
		this._storage.push(item);
	}
};

setPrototype.contains = function(item) {

	var containsElement = false;

	this._storage.forEach(function(entry) {
		if(entry === item) {
			containsElement =  true;
			return containsElement;
		}
	});

	return containsElement;
};

setPrototype.remove = function(item) {

	if (this.contains(item)) {
		var index = this._storage.indexOf(item);
		var elementsRemoved = this._storage.splice(index,1);
	};

	return elementsRemoved[0];

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
