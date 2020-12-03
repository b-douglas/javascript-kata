'use strict'

function createPhoneNumber(numbers) {

    if (numbers.length != 10) {
        return ""
    }

    // const regex = new RegExp(',', 'g')
    // numbers = numbers.toString().replace(regex, "")
    //console.log(numbers)
    numbers = numbers.join("")
    let one = numbers.slice(0, 3)
    let two = numbers.slice(3, 6)
    let three = numbers.slice(6, 10)

    return `(${one}) ${two}-${three}`

}

module.exports = createPhoneNumber