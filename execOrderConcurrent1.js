function resolveAfter2Seconds() {
	console.log('starting slow promise');
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('slow');
			console.log('slow promise is done');
		}, 5000);
	});
}

function resolveAfter1Second() {
	console.log('starting fast promise');
	return new Promise((resolve, reject) => {
		// setTimeout(() => {
		// 	resolve('fast');
		// 	console.log('fast promise is done');
		// }, 1000);

		reject();
	});
}

async function concurrent1() {
	try {
		console.log('== concurrent1 starts ==');

		// 1. Start two timers concurrently and wait for both to complete
		const results = await Promise.all([
			resolveAfter2Seconds(),
			resolveAfter1Second(),
		]);

		//2. Log the results together
		console.log(results[0]);
		console.log(results[1]);

		console.log('== concurrent1 done ==');
	} catch (error) {
		console.log('I am in concurrent1 wait error', error);
		console.log(error);
	}
}

setTimeout(concurrent1); //no delay
