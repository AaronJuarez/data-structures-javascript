/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 */

var binarySearch = function (array, target) {
	var index = null;
	var begin = 0;
	var end = array.length;
	var middle = Math.floor((array.length)/2);
	console.log(middle);
	var elem = array[middle];

	while(elem !== target && middle >= 0) {
		debugger;
		if (target < elem) {
			end = middle;
			middle = Math.floor(middle/2);
			elem = array[middle];
		}else {
			begin = middle + 1;
			middle = begin + Math.floor((end - begin)/2);
			elem = array[middle];
		}
	}

	if (elem === target) {
		index = array.indexOf(elem);
	}
	return index;
};

var index = binarySearch([1, 2, 3, 4, 5], 4);
console.log(index); // 3