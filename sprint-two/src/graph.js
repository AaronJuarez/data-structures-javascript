

// ------------------------
// Instantiate a new graph
var Graph = function() {
	this.vertices = [];
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
	this.vertices.push(new graphNode(node));
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
	var containsNode = false;

	for (var i = 0; i < this.vertices.length; i++) {

		var entry = this.vertices[i];
		if(entry.value === node) {
			containsNode = true;
			break;
		}
	}

	return containsNode;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	var currentNode = null;

	var currentIndex = this.findIndex(node);

	if (currentIndex !== null) {
		currentNode = this.vertices.splice(currentIndex, 1)[0];
	}

	return currentNode;
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
	//debugger;
	var fromNodeIdx = this.findIndex(fromNode);
	var toNodeIdx = this.findIndex(toNode);
	var containsNode = false;

	var element = this.vertices[fromNodeIdx];
	for(var i = 0; i < element.edges.length; i++) {
		if (element.edges[i] === toNodeIdx) {
			containsNode = true;
			break;
		}
	};
	return containsNode;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	var fromNodeIdx = this.findIndex(fromNode);
	var toNodeIdx = this.findIndex(toNode);

	var element = this.vertices[fromNodeIdx];
	element.edges.push(toNodeIdx);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
	if (this.hasEdge(fromNode, toNode)) {
		var fromNodeIdx = this.findIndex(fromNode);
		var toNodeIdx = this.findIndex(toNode);

		var element = this.vertices[fromNodeIdx];
		element.edges.splice(element.edges.indexOf(toNodeIdx), 1);
	}
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
	this.vertices.forEach(function(entry) {
		cb(entry.value);
	});
};

Graph.prototype.findIndex = function(node) {
	var currentIndex = null;

	for (var i = 0; i < this.vertices.length; i++) {

		var entry = this.vertices[i];
		if(entry.value === node) {
			currentIndex = i;
			break;
		}
	}
	return currentIndex;
}

var graphNode = function(val) {
	this.value = val;
	this.edges = [];
}
/*
 * Complexity: What is the time complexity of the above functions?
 */


