'use strict'



String.prototype.toJadenCase = function () {
    /**
     * @param {string | any[]} w
     */
    const wordToUpper = w => w[0].toUpperCase() + w.slice(1)

    return this.split(' ').
        map(wordToUpper).join(' ')
}