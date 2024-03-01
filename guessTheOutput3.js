//Creating a function which returns a promise or promise returning function
function resolveAfter2Seconds(num1, num2) {
	console.log(num1, num2);
	//using new keyword to call promise constructor
	//((resolve, reject) => {}), the function called inside the promise is also called a anonymous function
	return new Promise((resolve, reject) => {
		//Code the logic you want
		//lets suppose I want to return the sum of 2 numbers after 2 seconds
		setTimeout(() => {
			resolve(num1 + num2);
		}, 2000); //settting a delay for 2 seconds

		console.log('Are you guessing it right?');
	});
}

//lets declare 2 variables
const num1 = 10;
const num2 = 23;

// lets call the resolveAfter2Seconds function
//we will be using the async/await syntax to consume the promise returning function

async function sum2Numbers() {
	//using async/await keyword because the function we are calling returns a promise and we need to resolve the promise using await keyword
	const answer = await resolveAfter2Seconds(num1, num2);

	console.log(answer);
	console.log('Guess the order of printing!!!');
}

//call the async function
sum2Numbers();

// setTimeout(callback function, delay in milliseconds) global function
// setTimeout() is an asynchronous function, meaning that the timer function will not pause execution of other functions in the functions stack.
// In other words, you cannot use setTimeout() to create a "pause" before the next function in the function stack fires.

setTimeout(() => {
	console.log('Did you guess it right?');
}, 1000);

console.log('Congrats you got it all right!!!!');

// setTimeout syntax -
// setTimeout(code)
// setTimeout(code, delay)
// functionRef denotes a callback function
// setTimeout(functionRef)
// setTimeout(functionRef, delay)
// setTimeout(functionRef, delay, param1)
// setTimeout(functionRef, delay, param1, param2)
// setTimeout(functionRef, delay, param1, param2, /* …, */ paramN)

// OUTPUT
// 10 23
// Are you guessing it right?
// Congrats you got it all right!!!!
// Did you guess it right?
// 33
// Guess the order of printing!!!
