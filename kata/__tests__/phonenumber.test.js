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

const createPhoneNumber = require('../phonenumber.js')

let Test = new TestClass()

test("Testing all tests", () => {
    Test.assertEquals(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890")

    Test.assertEquals(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111")
})