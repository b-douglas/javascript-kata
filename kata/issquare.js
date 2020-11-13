class IsSquare {

    constructor () {

    }

    isSquare(n) {
        return Math.sqrt(n) % 1 === 0
    }

}

module.exports = IsSquare