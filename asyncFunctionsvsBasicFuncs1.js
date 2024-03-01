//Async functions always return a promise. If the return value of an async function is not explicitly a promise,
//it will be implicitly wrapped in a promise.
async function function1() {
	return 1; //returns -> Promise { 1 }
}

//The above code is similar to function f2()
function function2() {
	// The Promise.resolve() static method "resolves" a given value to a Promise.
	// If the value is a promise, that promise is returned; if the value is a thenable,
	// Promise.resolve() will call the then() method with two callbacks it prepared; otherwise the returned promise will be fulfilled with the value.
	// In brief, Promise.resolve() returns a promise whose eventual state depends on another promise, thenable object, or other value.
	return Promise.resolve(1); //returns -> Promise { 1 }
}

console.log(function1()); //output -> Promise { 1 }
console.log(function2()); //output -> Promise { 1 }

// Even though the return value of an async function behaves as if it's wrapped in a Promise.resolve, they are not equivalent.

// An async function will return a different reference, whereas Promise.resolve returns the same reference if the given value is a promise.

// It can be a problem when you want to check the equality of a promise and a return value of an async function.
console.log(function1() == function2());
console.log(function1() === function2()); //output -> false

let result1;
// resolving funtion1()
function1()
	.then((result) => {
		result1 = result;
		console.log(result1); //output -> 1. because result1 is assigned value after the async operation is complete or the promise has been resolved.
	})
	.catch((error) => {
		console.log(error);
	});

console.log(result1); //Prints undefined. why? becauase this synchronous code gets executed before the above asynchronous code.

//The above code can also be modified by using async/await instead of .then()
// async function main() {
// 	try {
// 		result1 = await function1();
// 		console.log(result1);
// 		// You can use result1 here if needed
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// main();
