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
let { server, app } = require('../source/index'); // importing the instance of our express server

afterAll(async(done) => {
    // force our server to close
    await server.close();

    // hack to trick jest into waiting a bit before
    // it freaks out over the process hanging open
    await new Promise(resolve => setTimeout(() => resolve(), 500));

    done();
})

describe('express server home page functionality', () => {
    test('should return status 200', async(done) => {
        const response = await request(app).get('/');
        expect(response.statusCode).toEqual(200);

        done();
    })

    test('should return the phrase "Hello World!"', async (done) => {
        const response = await request(app).get('/');
        expect(response.body.message).toEqual("Hello World!");

        done();
    });
});

describe('/studentNames page functionality', () => {
    test('should return the word "Luke"', async(done) => {
        const response = await request(app)
        .post('/studentNames')
        .send({
            studentNames: ["Luke", "Ash", "Nandini"]
        })

        expect(response.body.firstStudentName).toEqual("Luke");

        done();
    })
});