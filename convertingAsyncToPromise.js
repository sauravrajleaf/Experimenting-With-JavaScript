async function function1() {
	return await 1;
}

//function2() is equivalent to function1()
function function2() {
	return Promise.resolve().then(() => {
		return 1;
	});
}

// console.log(function1());
// console.log(function2());

// Code after each await expression can be thought of as existing in a .then callback.
// In this way a promise chain is progressively constructed with each reentrant step through the function.
// The return value forms the final link in the chain.

async function resolveFunc1AndFunc2() {
	try {
		const result1 = await function1();
		const result2 = await function2();
		console.log(result1, result2);
	} catch (error) {
		console.log(error);
	}
}

//call the resolve function
resolveFunc1AndFunc2();
