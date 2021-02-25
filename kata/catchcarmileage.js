export default class CatchCarMileage {
  static trace(str) {
    const isTrace = true

    if (isTrace) {
      console.log(str)
    }
  }

  static isInteresting(number, awesomePhrases) {
    // Go to town!

    CatchCarMileage.trace(`>CatchCarmMileage::isInteresting`)

    const no = 0
    const almost = 1
    const yes = 2

    let interesting = no

    if (number <= 99 || number >= 1000000000) {
      CatchCarMileage.trace(`<CatchCarmMileage::isInteresting ${interesting}`)
      return no
    }

    let sequentials = {
      up: [],
      down: [],
    }

    let i = 0
    for (i = 10; i <= number; i *= 10) {
      let digit = ((number % (i * 10)) / i).toFixed(0)
      CatchCarMileage.trace(`${i} ${digit} ${number}`)

      if (i === 10) {
        if (digit == 0) {
          sequentials.up = []
          sequentials.down = []
        }
        sequentials.up = digit * 10 + (digit + 1)
        sequentials.down
      }
    }

    //Check for Zeros
    if (interesting != yes) {
      //CatchCarMileage.trace(`${(number + 1) % (i / 10)}\n${number % (i / 10)}\n${(number + 2) % (i / 10)}`)

      if ((number + 1) % (i / 10) === 0 || (number + 2) % (i / 10) === 0) {
        interesting = almost
      } else if (number % (i / 10) === 0) {
        interesting = yes
      }
    }

    if (interesting != yes) {
      for (const n of awesomePhrases) {
        if (n === number) {
          interesting = yes
          CatchCarMileage.trace(`awesomePhrases ${n} === ${number} ${interesting}`)
          break
        } else if (number >= n - 2 && number < n) {
          interesting = almost
          CatchCarMileage.trace(`awesomePhrases ${number} is almost ${n}  ${number >= n - 2} ${number < n}`)
        }
      }
    }

    CatchCarMileage.trace(`<CatchCarmMileage::isInteresting ${interesting}`)
    return interesting
  }
}
