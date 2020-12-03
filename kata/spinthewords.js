'use strict'

function spinWords(input) {

    const spinWord = word => {
        if (word.length >= 5) {
            return word.split("").reverse().join("")
        } else {
            return word
        }
    }

    return input.split(" ").map(spinWord).join(" ")
}


module.exports = spinWords