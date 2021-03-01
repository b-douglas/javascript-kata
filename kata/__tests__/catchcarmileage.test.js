import CatchCarMileage from "../catchcarmileage"

class TestClass {
  assertEquals(x, y) {
    const str = "CatchCarMilage"
    try {
      expect(x).toBe(y)
    } catch (e) {
      console.log(`Error! ${str} ${e}`)
      throw e
    }
  }
}

const isInteresting = CatchCarMileage.isInteresting

let Test = new TestClass()

describe("Basic inputs", function () {
  test("should work, dangit!", function () {
    Test.assertEquals(isInteresting(3, [1337, 256]), 0)
    Test.assertEquals(isInteresting(111, [1337, 256]), 2)
    Test.assertEquals(isInteresting(1336, [1337, 256]), 1)
    Test.assertEquals(isInteresting(1337, [1337, 256]), 2)
    Test.assertEquals(isInteresting(7734, [7734, 256, 7736, 707, 543]), 2)
    Test.assertEquals(isInteresting(7734, [7736, 256, 256, 7735, 7734]), 2)
    Test.assertEquals(isInteresting(7734, [7736, 256, 256, 7735, 707]), 1)
    Test.assertEquals(isInteresting(1000, []), 2)
    Test.assertEquals(isInteresting(9000, []), 2)
    Test.assertEquals(isInteresting(9999, []), 2)
    Test.assertEquals(isInteresting(9998, []), 1)
    Test.assertEquals(isInteresting(1999, []), 1)
    Test.assertEquals(isInteresting(7890, []), 2)
    Test.assertEquals(isInteresting(7889, []), 1)
    Test.assertEquals(isInteresting(8901, []), 0)
    Test.assertEquals(isInteresting(4320, []), 1)
    Test.assertEquals(isInteresting(985, []), 1)
    Test.assertEquals(isInteresting(1098, []), 0)

    // Test.assertEquals(isInteresting(11208, [1337, 256]), 0)
    // Test.assertEquals(isInteresting(11209, [1337, 256]), 1)
    // Test.assertEquals(isInteresting(11211, [1337, 256, 58008, 707, 7734]), 2)
  })
})
