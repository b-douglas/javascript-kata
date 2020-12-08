'use strict'

class TestClass {
    assertEquals(x, y) {
        expect(x).toBe(y)
    }
}

const countBits = require('../bitcounting.js')

let Test = new TestClass()

describe("Test function", () => {
    test("Testing all tests", () => {
        Test.assertEquals(countBits(0), 0)
        Test.assertEquals(countBits(4), 1)
        Test.assertEquals(countBits(7), 3)
        Test.assertEquals(countBits(9), 2)
        Test.assertEquals(countBits(10), 2)
        Test.assertEquals(countBits(1234), 5)
    })
})
