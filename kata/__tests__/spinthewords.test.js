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

const spinWords = require('../spinthewords.js')

let Test = new TestClass()

test("Testing all tests", () => {
    Test.assertEquals(spinWords("Welcome"), 'emocleW')
})