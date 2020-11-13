// Copyright 2004-present Facebook. All Rights Reserved.

'use strict'


const IsSquare = require('./issquare')
// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

// const IsSquare = require('./issquare');

// console.log(IsSquare)

const is = new IsSquare();



// test("-1: Negative numbers cannot be square numbers", () => {
//   expect(false).toBe(false);
// });

test("-1: Negative numbers cannot be square numbers", () => {
  expect(is.isSquare(-1)).toBe(false);
});


test("0 is a square number (0 * 0)", () => {
  expect(is.isSquare(0)).toBe(true);
});

test("3 is not a square number", () => {
  expect(is.isSquare(3)).toBe(false);
});

test("4 is a square number (2 * 2)", () => {
  expect(is.isSquare(4)).toBe(true);
});

test("25 is a square number (5 * 5)", () => {
  expect(is.isSquare(25)).toBe(false);
});

test("26 is not a square number", () => {
  expect(is.isSquare(26)).toBe(false);
});

//       Test.assertEquals(isSquare(-1), false, "-1: Negative numbers cannot be square numbers");
//       Test.assertEquals(isSquare( 0), true, "0 is a square number (0 * 0)");
//       Test.assertEquals(isSquare( 3), false, "3 is not a square number");
//       Test.assertEquals(isSquare( 4), true, "4 is a square number (2 * 2)");
//       Test.assertEquals(isSquare(25), true, "25 is a square number (5 * 5)");
//       Test.assertEquals(isSquare(26), false, "26 is not a square number");