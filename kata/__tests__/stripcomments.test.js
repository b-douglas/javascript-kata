"use strict"

const solution = require("../stripcomments.js")

function checkComments(input, markers, expected) {
  var actual
  actual = solution(input, markers)
  return expect(actual).toBe(expected)
}

describe("Test function", () => {
  test("Testing all tests", () => {
    checkComments("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"], "apples, plums\npears\noranges")
    checkComments("Q @b\nu\ne -e f g", ["@", "-"], "Q\nu\ne")
  })
})
