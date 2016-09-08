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

	if (current === undefined) {
		current = this;
		containsElement = false;
	}
	console.log(current);
	console.log('target ' + target);
	console.log('value ' + current.value);

	if (current.value === target) {
		console.log('into it')
		containsElement = true;
		return containsElement;

	}else {
		if (current.children.length > 0) {

			for(var i = 0; i<current.children.length; i++) {
				current = current.children[i];
				containsElement = current.contains(target);
				console.log('containsElement is ' + containsElement)
				return containsElement;
			}
		}else {
			console.log('into else');
		}
	}
	return containsElement;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
