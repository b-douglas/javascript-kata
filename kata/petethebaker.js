function cakes(recipe, available) {
    let numCakes = 0
    let haveIngredients = true

    while (haveIngredients) {
        for (let ingredient in recipe) {
            if (available[ingredient]) {
                available[ingredient] -= recipe[ingredient]
                if (available[ingredient] < 0) {
                    haveIngredients = false
                    break
                }
            } else {
                haveIngredients = false
                break
            }
        }
        if (haveIngredients) {
            numCakes++
        }
    }
    return numCakes
}

module.exports = cakes