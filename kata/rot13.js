export default class Encrypt {
  static get alphabet() {
    return "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXWZ"
  }
  static get cipher() {
    return "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXWZABCDEFGHIJKLM"
  }

  static rot13(message) {
    const encrypt = (c) => {
      var i = Encrypt.alphabet.indexOf(c)
      if (i < 0) {
        // not in alphabet, return char
        return c
      }

      return Encrypt.cipher[i]
    }

    return message.split("").map(encrypt).join("")
  }
}
