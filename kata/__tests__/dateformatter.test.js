"use strict"

//const solution = require("../dateformatter.js")

function check(actual, expected) {
  return expect(actual).toBe(expected)
}

describe("Test function", () => {
  test("Testing all tests", () => {
    //let starttime = new Date("2021-03-10T14:15:12Z")
    let starttime = new Date()
    let current = new Date(starttime)
    current.setHours(current.getHours() + 1)

    check(current - starttime, 60 * 60 * 1000)
  })
})
