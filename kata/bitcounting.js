var countBits = function (n) {
    let ret = 0
    let powbit = 0
    let y = Math.pow(2, powbit)
    while (n > y) {
        y = Math.pow(2, powbit)
        if (n & y) {
            ret++
        }
        powbit++
    }

    return ret
}

module.exports = countBits