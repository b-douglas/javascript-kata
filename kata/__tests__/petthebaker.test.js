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

const cakes = require('../petethebaker.js')

let Test = new TestClass()

test("Testing all tests", () => {
    let recipe = { flour: 500, sugar: 200, eggs: 1 }
    let available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
    Test.assertEquals(cakes(recipe, available), 2, 'Wrong result for example #1')

    let recipe2 = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 }
    let available2 = { sugar: 500, flour: 2000, milk: 2000 }
    Test.assertEquals(cakes(recipe2, available2), 0, 'Wrong result for example #2')
})