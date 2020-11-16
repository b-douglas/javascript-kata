
'use strict'


const IsSquare = require('../issquare')

const is = new IsSquare()

test("-1: Negative numbers cannot be square numbers", () => {
  expect(is.isSquare(-1)).toBe(false)
})

test("0 is a square number (0 * 0)", () => {
  expect(is.isSquare(0)).toBe(true)
})

test("3 is not a square number", () => {
  expect(is.isSquare(3)).toBe(false)
})

test("4 is a square number (2 * 2)", () => {
  expect(is.isSquare(4)).toBe(true)
})

test("25 is a square number (5 * 5)", () => {
  expect(is.isSquare(25)).toBe(true)
})

test("26 is not a square number", () => {
  expect(is.isSquare(26)).toBe(false)
})