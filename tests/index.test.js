let { repeatMessage } = require('../source/index')

test("Name for an example test", () => {
    expect("this is a truthy string").toBeTruthy();
})

describe("repeatMessage block of multiple tests", () => {
    test("repeatMessage functionality", () => {
        expect(repeatMessage("hello", 3)).toEqual("hellohellohello");
        expect(repeatMessage("hello", 0)).toEqual("");
        expect(repeatMessage("a", 5)).not.toEqual("aaaaaa");
    })

    test("should be a function", () {
        expect(typeof(repeatMessage)).toBe("function")
    })
})