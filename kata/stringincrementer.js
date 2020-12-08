'use strict'

function incrementString(str) {
    const pattern = /(.*?)(\d+)$/
    const match = str.match(pattern)
    if (match !== null) {

        const front = match[1]
        const numlen = match[2].length
        const num = (Number(match[2]) + 1).toString()
        const number = num.toString().padStart(numlen, "0")
        return front + number
    } else {
        return str + "1"
    }
}

module.exports = incrementString