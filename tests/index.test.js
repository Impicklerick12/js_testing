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

    test("should be a function", () => {
        expect(typeof(repeatMessage)).toBe("function")
    })
})

const request = require('supertest');
let { app } = require('../source/index'); // importing the instance of our express server

describe('express server home page functionality', () => {
    test('should return status 200', async() => {
        const response = await request(app).get('/');
        expect(response.statusCode).toEqual(200);
    })

    test('should return the phrase "Hello World!"', async () => {
        const response = await request(app).get('/');
        expect(response.body.message).toEqual("Hello World!");
    });
});

describe('/studentNames page functionality', () => {
    test('should return the word "Luke"', async() => {
        const response = await request(app)
        .post('/studentNames')
        .send({
            studentNames: ["Luke", "Ash", "Nandini"]
        })

        expect(response.body.firstStudentName).toEqual("Luke");
    })
});