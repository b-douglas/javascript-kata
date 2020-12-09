function bouncingBall(h, bounce, window) {

    if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
        return -1
    }

    let result = -1
    for (let i = h; i > window; i = i * bounce) {
        result = result + 2
    }
    return result
}

module.exports = bouncingBall