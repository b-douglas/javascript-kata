'use strict'

class TestClass {
    assertEquals(x, y, str) {
        try {
            expect(x).toBe(y)
        } catch (e) {
            console.log(`Error! ${str} ${e}`)
            throw e
        }
    }
}

const bouncingBall = require('../bouncingBall.js')

let Test = new TestClass()

describe("Tests", function () {
    test("test1", function () {
        Test.assertEquals(bouncingBall(3.0, 0.66, 1.5), 3)
    })

    test("test2", function () {
        Test.assertEquals(bouncingBall(30.0, 0.66, 1.5), 15)
    })

    test("test3", function () {
        Test.assertEquals(bouncingBall(3.0, 0.1, 1.5), 1)
    })

    test("test4", function () {
        Test.assertEquals(bouncingBall(3.0, 0.99, 1.5), 137)
    })


    test("test5", function () {
        Test.assertEquals(bouncingBall(3.0, 0.99, 1.5), 137)
    })

    test("test6", function () {
        Test.assertEquals(bouncingBall(3.0, 0.99, 0.1), 677)
    })

    // test("test7", function () {
    //     Test.assertEquals(bouncingBall(3.0, 0.999999, 0.000001), 29828231)
    // })

    // test("test8", function () {
    //     Test.assertEquals(bouncingBall(3.0, 0.9999999, 0.0000001), 344334141)
    // })
})
