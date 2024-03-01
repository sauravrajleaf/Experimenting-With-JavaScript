// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
const p = new Promise((resolve, reject) => {
	resolve(1); //returns -> Promise { 1 }
});

async function asyncReturn() {
	return p; //output -> Promise { <pending> }
}

function basicFunction() {
	// The Promise.resolve() static method "resolves" a given value to a Promise.
	// If the value is a promise, that promise is returned; if the value is a thenable,
	// Promise.resolve() will call the then() method with two callbacks it prepared; otherwise the returned promise will be fulfilled with the value.
	// In brief, Promise.resolve() returns a promise whose eventual state depends on another promise, thenable object, or other value.
	return Promise.resolve(p); //returns -> Promise { 1 }
}
console.log(p); //output -> Promise { 1 }
console.log(basicFunction()); //output -> Promise { 1 }

console.log(p === basicFunction()); //output -> true

// console.log(asyncReturn()); //output -> Promise { <pending> }

// Even though the return value of an async function behaves as if it's wrapped in a Promise.resolve, they are not equivalent.

// An async function will return a different reference, whereas Promise.resolve returns the same reference if the given value is a promise.

// It can be a problem when you want to check the equality of a promise and a return value of an async function.

console.log(p === asyncReturn()); //output -> false

// console.log(asyncReturn());
// basicFunction();

// console.log(p);
