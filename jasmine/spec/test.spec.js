describe("Testing the sum function", function () {
	it("should be defined", function () {
		expect(sum).toBeDefined()
	})
	it("should add numbers together", function () {
		expect(sum(3, 5)).toBe(8)
		expect(sum(-5, 2)).toBe(-3)
	})
	it("should throw an Error if an argument is not a Number", function () {
		expect(sum).toThrowError()
	})
})

describe("Test the average age of a name", function () {
	it("should classify the names correctly", function () {
		const people = [
			{ name: "John", age: 20 },
			{ name: "John", age: 50 },
			{ name: "Alice", age: 30 },
			{ name: "Alice", age: 22 },
		]
		expect(averageAgeOfName(people)).toEqual({
			John: 35,
			Alice: 26,
		})
	})
})
