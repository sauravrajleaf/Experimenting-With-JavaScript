const readline = require('node:readline/promises');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function reverseString(str) {
	//String.prototype.split() ->The split() method of String values takes a pattern and divides this string into an ordered list of substrings
	//by searching for the pattern, puts these substrings into an array, and returns the array.

	// Array.prototype.reverse()
	// The reverse() method of Array instances reverses an array in place and returns the reference to the same array,
	// the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.

	// To reverse the elements in an array without mutating the original array, use toReversed().

	// Array.prototype.join()
	// The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array,
	// separated by commas or a specified separator string. If the array has only one item, then that item will be returned without
	// using the separator.
	return str.split('').reverse().join('');
}

// Get user input
rl.question('Enter a string: ', (userInput) => {
	console.log(userInput);
	console.log('Reversed String:', reverseString(userInput));
	rl.close();
});
