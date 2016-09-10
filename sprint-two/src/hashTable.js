

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  console.log(this._storage);
};

HashTable.prototype.insert = function(k, v) {
	//debugger;
  	var index = getIndexBelowMaxForKey(k, this._limit);
  	var innerStorage = this._storage.get(index);
  	var entry = new htEntry(k,v);

  	if (innerStorage === undefined ||  innerStorage === null) {
  		innerStorage = [];

  	}else {
  		var keyIdx = this.findKeyIdx(k);
  		if (keyIdx !== null) {
	  		innerStorage.splice(keyIdx, 1);
	  	}
	  }
	innerStorage.push(entry);

  	this._storage.set(index, innerStorage);
};

HashTable.prototype.retrieve = function(k) {
	//debugger;
  	var index = getIndexBelowMaxForKey(k, this._limit);
  	var innerStorage = this._storage.get(index);
  	var value;

  	if (innerStorage !== undefined) {
  		for (var i = 0; i < innerStorage.length; i++) {
	  		entry = innerStorage[i]
	  		if (entry.key === k) {
	  			value = entry.value;
	  			break;
	  		}
	  	}
  	}

  	return value;
};

HashTable.prototype.findKeyIdx = function(k) {
	var index = getIndexBelowMaxForKey(k, this._limit);
	var innerStorage = this._storage.get(index);
	var keyIdx = null;

	for (var i = 0; i < innerStorage.length; i++) {
		entry = innerStorage[i]
	  		if (entry.key === k) {
	  			keyIdx = i;
	  			break;
	  		}
	}
	return keyIdx;
};

HashTable.prototype.remove = function(k) {
	var index = getIndexBelowMaxForKey(k, this._limit);
  	var innerStorage = this._storage.get(index);
  	var innerStorageIdx;

  	if (innerStorage === undefined) {
  		return;
  	}

  	for (var i = 0; i < innerStorage.length; i++) {
  		entry = innerStorage[i]
  		innerStorageIdx = i;
  		if (entry.key === k) {
  			break;
  		}
  	}

  	innerStorage.splice(innerStorageIdx, 1);
  	this._storage.set(index, innerStorage);
};

var htEntry = function(key, value) {
	this.key = key;
	this.value = value;
}

/*
 * Complexity: What is the time complexity of the above functions?
 */


