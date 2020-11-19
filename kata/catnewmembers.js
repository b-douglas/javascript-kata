'use strict'

function openOrSenior(data) {

    // Mapping function
    const isSenior = ([age, handicap]) => {

        if (age >= 55 && handicap > 7) {
            return "Senior"
        } else {
            return "Open"
        }
    }

    return data.map(isSenior)
}


module.exports = openOrSenior