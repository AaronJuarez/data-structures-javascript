/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
var balancedParens = function(input){
	var paramArray = input.split('');
	var paramSize = paramArray.length/2;
	var result = true;

	for(var i=0; i<paramSize; i++) {
		var first = paramArray[i];
		var last = paramArray.pop();

		if (first === '(') {
			if (last !== ')') {
				result = false;
				break;
			}
		}else if (first === '{') {
			if (last !== '}') {
				result = false;
				break;
			}
		}else if (first === '[') {
			if (last !== ']') {
				result = false;
				break;
			}
		}
	}
	return result;
};
balancedParens('()');