import CatchCarMilage from "../catchcarmilage"

class TestClass {
  static assertEquals(x, y) {
    const str = "CatchCarMilage"
    try {
      expect(x).toBe(y)
    } catch (e) {
      console.log(`Error! ${str} ${e}`)
      throw e
    }
  }
}

const isInteresting = CatchCarMilage.isInteresting

let Test = new TestClass()

describe("Basic inputs", function () {
  test("should work, dangit!", function () {
    Test.assertEquals(isInteresting(3, [1337, 256]), 0)
    Test.assertEquals(isInteresting(1336, [1337, 256]), 1)
    Test.assertEquals(isInteresting(1337, [1337, 256]), 2)
    Test.assertEquals(isInteresting(11208, [1337, 256]), 0)
    Test.assertEquals(isInteresting(11209, [1337, 256]), 1)
    Test.assertEquals(isInteresting(11211, [1337, 256]), 2)
  })
})
