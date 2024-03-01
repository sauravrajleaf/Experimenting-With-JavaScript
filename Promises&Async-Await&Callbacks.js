//Creating a simple function which returns a promise - promise-returning functions
//Promise returning function or Async Function
//Async functions always return a promise. If the return value of an async function is not explicitly a promise,
//it will be implicitly wrapped in a promise.
function resolveAfter2Seconds() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Resolved');
		}, 1000);
	});
}

//Calling the above function which returns the promise using .then() & .catch()
resolveAfter2Seconds()
	.then((result) => {
		//After the promise has been resolved it will enter this part

		console.log(`using .then() ${result}`); //result contains the value returned after the promise is resolved
	})
	.catch((error) => {
		//If there is any error while resolving the promise it will enter here
		console.log(error);
	})
	.finally(() => {
		//This is optional. If something has to be implemented after promise has been resolved it can be done here.
	});

//Another way to consume or call the above promise returning function is using async/await
//async - keyword
//function - keyword
//asyncFunc - Function name
async function asyncFunc() {
	// Await expressions make promise-returning functions behave as though they're synchronous by suspending execution until the
	// returned promise is fulfilled or rejected. The resolved value of the promise is treated as the return value of the await expression.
	const result = await resolveAfter2Seconds();

	console.log(`using async ${result}`);
	console.log('I am here');
}

console.log('I am here 2');

//calling the async function
asyncFunc();

// OUTPUT
// I am here 2
// using .then() Resolved
// using async Resolved
// I am here
