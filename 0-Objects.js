// Notation of object : {}

const user = {
	name: "Bob",
}
console.log(user.name)
console.log(user["name"])

const myVariable = "name"

console.log(user[myVariable])

const bottle = {
	brand: "Evian",
	quantity: 75,
	capColor: "blue",
	material: "plastic",
	availableTypes: ["sparkling", "flat"],
}

function drink(aBottle) {
	console.log("Drinking water...")
	aBottle.quantity -= 5
}

console.log(bottle)
drink(bottle)
console.log(bottle)

bottle.ecoBottle = true

for (const element of bottle.availableTypes) {
	console.log(`My bottle is available as ${element}`)
}

// delete bottle.availableTypes

console.log(bottle)

const userAddress = {
	city: "Paris",
	street: "Champs-Elysées",
	zipCode: 75008,
}

user.address = userAddress
console.log(user)

const alice = {
	name: "Alice",
	address: {
		city: "Paris",
		street: "Maillard",
		zipCode: 75011,
	},
}

const john = {}
john.name = "John"
john.address = {}
john.address.city = "Paris"
john.address.street = "Rivoli"

console.log(alice.address.zipCode)
// console.log(alice.adress.zipCode)

const cat = {
	name: "Not Illiu",
	activities: [
		"Play with a ball.",
		"Maow!",
		"Do a mess when everything is clean.",
	],
}
// Illiu like to Play with a ball
// Illiu like to Maow!
// Do a mess when everything is clean.
for (const element of cat.activities) {
	if (!element.includes("mess")) {
		console.log(`${cat.name} likes to ${element}`)
	}
}

// bottle["capColor"]

console.log("======  FOR IN  ========")
for (const aKey in bottle) {
	// console.log(aKey)
	// console.log(bottle[aKey])
	if (Array.isArray(bottle[aKey])) {
		console.log("This is an Array", aKey)
		for (const element of bottle[aKey]) {
			console.log(element)
		}
	}
}

console.log("Checking if a value is An array: ", Array.isArray({}))
console.log("Checking if a value is An array: ", Array.isArray([]))
console.log(typeof [])
console.log(typeof {})
console.log(typeof function () {})

const keyOfCat = Object.keys(cat)
console.log(keyOfCat)
const valuesOfCat = Object.values(cat)
console.log(valuesOfCat)

const aliceValues = Object.values(alice)
console.log(aliceValues)

const allEntriesOfBob = Object.entries(user)
console.log(`==========  Bob ===========`)
console.log(allEntriesOfBob)
