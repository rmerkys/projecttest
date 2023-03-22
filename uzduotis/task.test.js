const {sum, substract, multiple, division} = require("./task");

// Sukurkite naują JavaScript failą ir apibrėžkite funkciją, kuri priima du parametrus ir grąžina jų sumą.
// test cases: 
// The function correctly adds two positive numbers
// The function correctly adds two negative numbers
// The function correctly adds a positive number and a negative number
// The function correctly subtracts two positive numbers
// The function correctly subtracts two negative numbers
// The function correctly subtracts a positive number and a negative number
// The function correctly multiplies two positive numbers
// The function correctly multiplies two negative numbers
// The function correctly multiplies a positive number and a negative number
// The function correctly divides two positive numbers
// The function correctly divides two negative numbers
// The function correctly divides a positive number and a negative number
// The function correctly handles division by zero and returns NaN

describe("task", () => {
    test(" positive numbers: adds 1 + 2 to equal 3", () => {
        expect(sum(1, 2)).toBe(3);
    })
    test(" negative numbers: adds -1 + -2 to equal -3", () => {
        expect(sum(-1, -2)).toBe(-3);
    })
    test("positive and negative numbers: adds -1 + 2 to equal 1", () => {
        expect(sum(-1, 2)).toBe(1);
    })
    test("substract positive numbers: substracts 5 - 2 to equal 3", () => {
        expect(substract(5, 2)).toBe(3);
    })
    test("substract negative numbers: substracts -5 - -2 to equal -3", () => {
        expect(substract(-5, -2)).toBe(-3);
    })
    test("substract negative and positive numbers: substracts -5 - 2 to equal -7", () => {
        expect(substract(-5, 2)).toBe(-7);
    })
    test("multiple positive numbers: multiples 5 * 2 to equal 10", () => {
        expect(multiple(5, 2)).toBe(10);
    })
    test("multiple negative numbers: multiples -5 * -2 to equal 10", () => {
        expect(multiple(-5, -2)).toBe(10);
    })
    test("multiple positive and negative numbers: multiples 5 * -2 to equal -10", () => {
        expect(multiple(5, -2)).toBe(-10);
    })
    test("devides positive numbers: devides 10 / 2 to equal 5", () => {
        expect(division(10, 2)).toBe(5);
    })
    test("devides negative numbers numbers: devides -10 / -2 to equal 5", () => {
        expect(division(-10, -2)).toBe(5);
    })
    test("devides positive and negative numbers numbers: devides 10 / -2 to equal -5", () => {
        expect(division(10, -2)).toBe(-5);
    })
    test("devide by zero: devides 10 / 0 to equal NaN", () => {
        expect(division(10, 0)).toBe(NaN);
    })
})