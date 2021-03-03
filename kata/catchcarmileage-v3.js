function isPalindrome(number) {
  return number.toString().length > 2 && /^(.?)(.?)(.?)(.?)(.?).?\5\4\3\2\1$/.test(number)
}

function isSequentialAsc(number) {
  return number.toString().length > 2 && "1234567890".indexOf(number) >= 0
}

function isSequentialDesc(number) {
  return number.toString().length > 2 && "9876543210".indexOf(number) >= 0
}

function isAwesomePhrase(number, awesomePhrases) {
  return awesomePhrases.some(function (n) {
    return n == number
  })
}

function isFollowedByZero(number) {
  return number % 100 == 0 || number % 1000 == 0 || number % 10000 == 0
}

function isSameDigits(number) {
  return /^(\d)\1{2,4}$/.test(number)
}

function isInteresting(number, awesomePhrases) {
  var isInteresting = 0

  for (var i = 0; i < 3 && !isInteresting && number >= 98; ++i, number++) {
    isInteresting =
      isPalindrome(number) ||
      isSequentialAsc(number) ||
      isSequentialDesc(number) ||
      isAwesomePhrase(number, awesomePhrases) ||
      isFollowedByZero(number) ||
      isSameDigits(number)
        ? i == 0
          ? 2
          : 1
        : 0
  }
  return isInteresting
}

module.exports = isInteresting
