let animals = ["cat", "dog", "bird"];

beforeEach(() => {
    animals = ["cat", "dog", "bird"];
} )

describe("animals array", () => {
    test("should add animal to the end of array", () => {
        animals.push("fish");
        expect(animals[animals.length - 1]). toBe("fish")
    })

    test("should add animal to the begining of the array", () => {
        animals.unshift("aligator");
        expect(animals[0]).toBe("aligator");
    })

    test("should have initial length of 3", () => {
        expect(animals.length).toBe(3);
    })
})