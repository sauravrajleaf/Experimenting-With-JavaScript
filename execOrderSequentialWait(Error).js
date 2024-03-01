function resolveAfter2Seconds() {
	console.log('starting slow promise');
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve('slow');
			console.log('slow promise is done');
		}, 2000);
	});
}

function resolveAfter1Second() {
	console.log('starting fast promise');
	return new Promise((resolve, reject) => {
		// setTimeout(() => {
		// 	resolve('fast');
		// 	console.log('fast promise is done');
		// }, 1000);
		reject(); //let's see if we reject the promise what happens
	});
}

async function sequentialWait() {
	try {
		console.log('== sequentialWait starts ==');

		// 1. Start two timers without waiting for each other
		const slow = resolveAfter2Seconds();
		const fast = resolveAfter1Second();

		// 2. Wait for the slow timer to complete, and then log the result
		console.log(await slow);
		// 3. Wait for the fast timer to complete, and then log the result
		console.log(await fast);

		console.log('== sequentialWait done ==');
	} catch (error) {
		console.log('I am in sequential wait error', error);
		console.log(error);
	}
}

// wait above to finish
setTimeout(sequentialWait, 4000); // after 2 seconds, logs "slow" and then "fast"
