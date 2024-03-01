//Creating a function which returns a promise or promise returning function
function resolveWithoutDelay(num1, num2) {
	console.log(num1, num2);
	//using new keyword to call promise constructor
	//((resolve, reject) => {}), the function called inside the promise is also called a anonymous function
	return new Promise((resolve, reject) => {
		//Code the logic you want
		//lets suppose I want to return the sum of 2 numbers after 2 seconds
		resolve(num1 + num2);
	});
}

//lets declare 2 variables
const num1 = 10;
const num2 = 23;

// lets call the resolveWithoutDelay function
//we will be using the async/await syntax to consume the promise returning function

async function sum2Numbers() {
	//using async/await keyword because the function we are calling returns a promise and we need to resolve the promise using await keyword
	const answer = await resolveWithoutDelay(num1, num2);

	console.log(answer);
	console.log('Guess the order of printing!!!');
}

//call the async function
sum2Numbers();

console.log('Did you guess it right?');

// OUTPUT
// 10 23
// Did you guess it right?
// 33
// Guess the order of printing!!!

// INTUITON
// Code runs from top to bottom
// At line 29 sum2Numbers function is called
// The control goes inside the function sum2Numbers
// At line 22 it calls the function resolveWithoutDelay which is a promise returning function or async function
// The control moves inside the function resolveWithoutDelay
// It runs the console log statement and prints the 2 numbers
// Later we see that we are returning a promise from the function
// According to the rules the first priority is always given to the the synchronous code, i.e, The normal flow of execution will not be interrupted to run a callback function.
// Now the control comes back to the await statment at line 22 but now the promise needs to be resolved which is a asynchronous code and this will be handled by the libuv library
// But the normal execution will not stop so the control will move to the line 31 console log statement while libuv takes care of the asynchronous callback
// So the line 31 gets printed
// And ultimately the promise object gets resolved and line 24 and 25 is logged.
