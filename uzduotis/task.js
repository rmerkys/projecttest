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

function sum(a, b) {
    return a + b
}
function substract(a, b) {
    return a - b
}
function multiple(a, b) {
    return a * b
}
function division(a, b) {
    if (b === 0) {
        return NaN;
       } else {
        return a / b
       }
}


module.exports = {sum, substract, multiple, division}