var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXWZ"
var cipher = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXWZABCDEFGHIJKLM"

function rot13(message) {

  const encrypt = c => {
    var i = alphabet.indexOf(c)
    if (i < 0) {
      // not in alphabet, return char
      return c
    }

    return cipher[i]
  }

  return message.split('').map(encrypt).join('')
}

module.exports = rot13