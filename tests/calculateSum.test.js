// Function named "calculateSum"

// What should it do?
// check if args were numbers
// It should add all numbers together
// array -> single number ?? how ??
// Using reduce /  or loop through input

// What should the function output or return?
// Function output can be whole or decimal

// What should the function take in(arguments) if any?
// Array of numbers

// calculateSum([1,2,3,4]) // Good!

// calculateSum(1,2,3,4) // Bad!

// calculateSum(["1",2,3,4]) // Bad!

let { calculateSum } = require('../source/calculateSum')

describe('calculateSum input functionality', () => {

    test('should only accept an array as input args', () => {

        expect(() => {
            calculateSum([1,2,3,4])
        }).not.toThrow();

        expect(() => {
            calculateSum("hello", "world")
        }).toThrow();

        expect(() => {
            calculateSum(["1",2,"3",4])
        }).toThrow("Should not accept string type input");

        expect(() => {
            calculateSum([])
        }).not.toThrow();

        expect(() => {
            calculateSum("[1,2,3,4]")
        }).toThrow("Should not accept string type input");

    })

    test('should only generate numbers as output', () => {

        // expect(() => {
        //     calculateSum([1,2,3,4,5])
        // }).toEqual(15)

        expect(calculateSum([1,2,3,4,5])).toEqual(15);

        expect(calculateSum([1.5,2.5,3.5])).toEqual(7.5);
        
    })

})