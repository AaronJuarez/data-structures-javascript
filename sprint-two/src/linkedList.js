var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var temp = this.tail;

    this.tail = new Node(value);
    this.tail.next = temp;

    if (this.head === null) {
      this.head = this.tail;
    }

  };

  list.removeHead = function() {

    var current = this.tail;
    var temp = null;

    if(current !== null) {

      if(current === this.head) {
        temp = current;
        this.tail = null;
        this.head = null;
        return temp.value;
      }

      while(current.next !== this.head) {
        current = current.next;
       }

      temp = current.next;
      current.next = null;
      this.head = current;

    }

    return temp.value;
  };

  list.contains = function(target) {

    var current = this.tail;
    while(current !== null) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }
    return false;
  };

  list.display = function() {
    var current = this.tail;

    while(current !== null) {
      current = current.next;
    }
  }

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
