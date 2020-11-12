#!/usr/bin/env node

class Kata {

    isSquare(n) {
        return Math.sqrt(n) % 1 === 0;
      }

}

class Test {
    constructor() {
        super();                          // Invoke superclass constructor
    }

    assertEquals (actual, expected, msg, options) {
        if (typeof(msg) == 'object') {
          options = msg;
          msg = null;
        }
  
        if (actual !== expected) {
          var explain = options && options.explain ? options.explain : alwaysExplain;
  
          if (explain) {
            Test.expect(false, msg || "Values should be equal", _failed(options, function() {
              Test.display.explain(actual, expected, {mode: explain, className: 'failed'});
            }));
          }
          else {
            Test.expect(false, Test.display.message('Expected: ' + Test.inspect(expected) + ', instead got: ' + Test.inspect(actual), msg));
          }
        }
        else {
          options = options || {};
          options.successMsg = options.successMsg || 'Value == ' + Test.inspect(expected);
          Test.expect(true, null, options);
        }
      }

      inspect (obj) {
        // format arrays ourselves since long arrays end up getting broken out into separate lines, which is often a
        // bad format for typical use cases.
        if (Array.isArray(obj)) {
          return "[" + obj.map(function(v) {
            return Test.inspect(v);
          }).join(", ") + "]";
        }
        return util.inspect(obj);
      }
}




// Test.describe("isSquare", function(){
//     Test.it("should work for some examples", function(){
//       Test.assertEquals(isSquare(-1), false, "-1: Negative numbers cannot be square numbers");
//       Test.assertEquals(isSquare( 0), true, "0 is a square number (0 * 0)");
//       Test.assertEquals(isSquare( 3), false, "3 is not a square number");
//       Test.assertEquals(isSquare( 4), true, "4 is a square number (2 * 2)");
//       Test.assertEquals(isSquare(25), true, "25 is a square number (5 * 5)");
//       Test.assertEquals(isSquare(26), false, "26 is not a square number");
//     });
//   });


Test.assertEquals(Kata.isSquare(-1), false, "-1: Negative numbers cannot be square numbers");