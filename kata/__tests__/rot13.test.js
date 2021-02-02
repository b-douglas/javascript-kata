
import Encrypt from "../rot13"

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

const rot13 = Encrypt.rot13

let Test = new TestClass()

describe("Test function", () => {
    test("Testing all tests", () => {
        Test.assertEquals(rot13("test"), "grfg")
        Test.assertEquals("Grfg", rot13("Test"))
    })
})
