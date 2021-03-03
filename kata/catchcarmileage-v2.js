function isInteresting(number, awesomePhrases) {
  var tests = [
    function (n) {
      return /^\d00+$/.test(n)
    },
    function (n) {
      return /^(\d)\1+$/.test(n)
    },
    function (n) {
      return RegExp(n).test(1234567890)
    },
    function (n) {
      return RegExp(n).test(9876543210)
    },
    function (n) {
      return n + "" == (n + "").split("").reverse().join("")
    },
    function (n) {
      return awesomePhrases.some(function (p) {
        return p == n
      })
    },
  ]

  var interesting = 0
  tests.some(function (test) {
    if (number > 99 && test(number)) return (interesting = 2)
    else if ((number > 98 && test(number + 1)) || (number > 97 && test(number + 2))) interesting = 1
  })
  return interesting
}

module.exports = isInteresting
