import greet from "./idea"

test("", () => {
	expect(greet("world")).toBe("Hello, world!")
})
