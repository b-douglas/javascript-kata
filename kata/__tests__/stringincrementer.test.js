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

const incrementString = require('../stringincrementer.js')

let Test = new TestClass()
describe("Test function", () => {
    test("Testing all tests", () => {
        Test.assertEquals(incrementString("foobar000"), "foobar001")
        Test.assertEquals(incrementString("foo"), "foo1")
        Test.assertEquals(incrementString("foobar001"), "foobar002")
        Test.assertEquals(incrementString("foobar99"), "foobar100")
        Test.assertEquals(incrementString("foobar099"), "foobar100")
        Test.assertEquals(incrementString("foobar0099"), "foobar0100")
        Test.assertEquals(incrementString("1"), "2")
        Test.assertEquals(incrementString(""), "1")
    })
})