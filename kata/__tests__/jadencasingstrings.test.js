

'use strict'

class TestClass {
    assertEquals(x, y) {
        expect(x).toBe(y)
    }
}

const countBits = require('../jadencasingstrings.js')

let Test = new TestClass()



var str = "How can mirrors be real if our eyes aren't real"
test("Testing all tests", () => {
    Test.assertEquals(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real")
})