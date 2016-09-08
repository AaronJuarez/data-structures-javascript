var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
	var current;
	var containsElement;

	if (current === undefined || current === null) {
		current = this;
	}
	console.log(current);

	if (current.value === target) {
		console.log('into it')
		containsElement = true;
		return containsElement;

	}else {
		if (current.children.length > 0) {

			current.children.forEach(function(entry) {
				current = entry;
				containsElement = current.contains(target);
				console.log('containsElement is ' + containsElement)
				return containsElement;
			});
		}else {
			console.log('into else');
			containsElement = false;

		}
	}
	current = null;
	return containsElement;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
