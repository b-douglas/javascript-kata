

'use strict'

class TestClass {
    assertSimilar(x, y) {
        if (x instanceof Array && y instanceof Array) {
            if (x.length !== y.length) {
                return false
            }
            for (let i = 0; i < x.length && i < y.length; i++) {
                expect(x[i]).toBe(y[i])
            }
        }
        else {
            return false
        }
    }
}

const openOrSenior = require('../catnewmembers.js')

let Test = new TestClass()

describe("Test function", () => {
    test("Testing all tests", () => {
        Test.assertSimilar(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]), ['Open', 'Senior', 'Open', 'Senior'])
        Test.assertSimilar(openOrSenior([[3, 12], [55, 1], [91, -2], [54, 23]]), ['Open', 'Open', 'Open', 'Open'])
        Test.assertSimilar(openOrSenior([[59, 12], [55, -1], [12, -2], [12, 12]]), ['Senior', 'Open', 'Open', 'Open'])

    })
})