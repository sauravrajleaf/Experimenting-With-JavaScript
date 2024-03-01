async function function1() {
	const result1 = await new Promise((resolve, reject) => {
		setTimeout(() => resolve('1')); //no delay
	});
	console.log(result1);
	const result2 = await new Promise((resolve, reject) => {
		setTimeout(() => resolve('2')); //no delay
	});
	console.log(result2);
}

//calling the function1
function1();

// In the following example, we successively await two promises. Progress moves through function foo in three stages.

// 1.The first line of the body of function foo is executed synchronously, with the await expression configured with the pending promise. Progress through foo is then suspended and control is yielded back to the function that called foo.
// 2. Some time later, when the first promise has either been fulfilled or rejected, control moves back into foo. The result of the first promise fulfillment (if it was not rejected) is returned from the await expression. Here 1 is assigned to result1. Progress continues, and the second await expression is evaluated. Again, progress through foo is suspended and control is yielded.
// 3. Some time later, when the second promise has either been fulfilled or rejected, control re-enters foo. The result of the second promise resolution is returned from the second await expression. Here 2 is assigned to result2. Control moves to the return expression (if any). The default return value of undefined is returned as the resolution value of the current promise.

// Note how the promise chain is not built-up in one go. Instead, the promise chain is constructed in stages as control is successively yielded from and returned to the async function. As a result, we must be mindful of error handling behavior when dealing with concurrent asynchronous operations.
