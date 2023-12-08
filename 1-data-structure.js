const students = [
	{
		name: "Bob",
		age: 40,
	},
	{
		name: "Alice",
		age: 40,
	},
	{
		name: "John",
		age: 28,
	},
	{
		name: "Toto",
		age: 26,
	},
]
/**
 * {
 *    40: [Bob, Alice],
 *    28: [John],
 *    26: [Toto]
 * }
 *
 * we probably need an empty Object
 * Loop over the students array
 * Set the age of the student as a key in my empty Object
 * Store the name of the student (in an array) on this key.
 */
const organizedStudents = {}
for (const student of students) {
	console.log(`==========  New iteration ======= \n \n`)
	// console.log(student.age)
	// console.log("Before")
	// console.log(organizedStudents)
	// console.log(organizedStudents[student.age], student.name, student.age)
	// organizedStudents[student.age] = [student.name]
	// console.log("After")
	// console.log(organizedStudents)
	if (organizedStudents[student.age]) {
		console.log(
			`Key ${student.age} does exist in my object, let's push ${student.name}`
		)
		console.log(organizedStudents)
		organizedStudents[student.age].push(student.name)
		console.log(organizedStudents)
	} else {
		console.log(`Key ${student.age} does not exist, let's create it`)
		console.log(organizedStudents)
		organizedStudents[student.age] = [student.name]
		console.log(organizedStudents)
	}
}

const user = {}

console.log(user.name)
user.name = "Illiu"

console.log(organizedStudents)
const fridge = [
	{
		name: "Tomatoes",
		category: "vegetable",
	},
	{
		name: "Carrots",
		category: "vegetable",
	},
	{
		name: "Duck",
		category: "meat",
	},
]
/**
 * {
 *  vegetable: [Tomatoes, Carrots],
 *  meat: [Duck]
 * }
 */

const organizedFridge = {}

for (const food of fridge) {
	if (!organizedFridge[food.category]) {
		organizedFridge[food.category] = [food.name]
	} else {
		organizedFridge[food.category].push(food.name)
	}
}

console.log(organizedFridge)
