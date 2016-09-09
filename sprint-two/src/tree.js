var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
	var current = this;
	var containsElement = false;

	if (current.value === target) {
		containsElement = true;
		return containsElement;

	}else {
		if (current.children.length > 0) {

			for(var i = 0; i<current.children.length; i++) {
				current = current.children[i];
				containsElement = current.contains(target);
				current = this;

				if (containsElement === true) {
					break;
				}
			}
		}
	}
	return containsElement;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
