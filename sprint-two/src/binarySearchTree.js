var BinarySearchTree = function(value) {
	this.value = value;
	this.left = null;
	this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
	var current = this;
	var newNode = new treeNode(value);

	while(current !== null) {
		if (value < current.value) {
			if (current.left !== null) {
				current = current.left;
			}else {
				current.left = newNode;
				return;
			}

		}else {
			if (current.right !== null) {
				current = current.right;
			}else {
				current.right = newNode;
				return;
			}
		}
	}

}

BinarySearchTree.prototype.contains = function(data) {
	var current = this;

	while(current.value !== data) {
		if (data < current.value) {
			current = current.left;
		}else {
			current = current.right;
		}
		if (current === null) {
			return false;
		}
	}

	return current.value === data;
}

BinarySearchTree.prototype.depthFirstLog = function(func) {
	var that = this;
	this.preorder(this, func);

}

BinarySearchTree.prototype.preorder = function(currentNode, callback) {
	var current = currentNode;

	if (current !== null) {
		callback(current.value);
		this.preorder(current.left, callback);
		this.preorder(current.right, callback);
	}else {
		return;
	}

}

var treeNode = function(val) {
	this.value = val;
	this.right = null;
	this.left = null;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
