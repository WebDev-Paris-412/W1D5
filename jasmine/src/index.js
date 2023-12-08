function sum(a, b) {
	console.log(a + b)
	if (isNaN(a) || isNaN(b)) {
		throw Error("The arguments should be valid numbers")
	}
	return a + b
}

const people = [
	{ name: "John", age: 20 },
	{ name: "John", age: 50 },
	{ name: "Alice", age: 30 },
	{ name: "Alice", age: 22 },
]

function averageAgeOfName(arrayOfPeople) {
	/**
	 * {
	 *  John: [20, 50],
	 *  Alice : [30, 22]
	 * }
	 */
	const result = Object.groupBy(arrayOfPeople, function (person) {
		return person.name
	})
	/**
	 * {
	 *  John: [
	 *    {name: 'John', age: 20},
	 *    {name: 'John', age: 50}
	 *  ],
	 *  Alice: [
	 *    {name: 'Alice', age: 30},
	 *    {name: 'Alice', age: 22}
	 *  ]
	 * }
	 */
	console.log(result)
	for (const key in result) {
		let total = 0
		/**
		 * result[key] is the array containing the user with the
		 * same name
		 */
		// console.log(result[key])
		const currentArray = result[key]
		for (const user of currentArray) {
			total += user.age
		}
		// console.log(total / currentArray.length)
		const avg = total / currentArray.length
		result[key] = avg
	}
	console.log(result)
	return result
}

// sum("chocolate", "tea")
