function rot13(message) {
    let ret = ""
    for (let i = 0; i < message.length; i++) {
        let char = message.charCodeAt(i)
        let rot13 = char + 13
        console.log(`${char} ${rot13}`)

        ret += char
    }
}