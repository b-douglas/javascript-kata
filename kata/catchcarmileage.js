const log = []

export default class CatchCarMileage {
  static trace(str) {
    const isTrace = true
    if (isTrace) {
      log.push(str)
    }
  }

  static traceout() {
    const isTrace = true

    if (isTrace) {
      console.log(log.join("\n"))
    }
    log.length = 0
  }

  static allSameDigit(firstDigit, numLen) {
    let num = 0
    for (let i = 0; i <= numLen; i++) {
      num = num + firstDigit * 10 ** i
    }
    return num
  }

  static seqDec(firstDigit, numLen) {
    let num = 0
    let digit = firstDigit
    let part = 0
    for (let i = numLen; digit >= 0 && digit <= 9 && i >= 0; i--) {
      part = digit * 10 ** i
      num = num + part
      if (digit === 1 && i > 0) {
        num = -1
        break
      } else if (digit === 0) {
        digit = 9
      } else {
        digit--
      }
    }
    CatchCarMileage.trace(`seqDec - ${firstDigit} ${numLen} ${num}`)
    return num
  }

  static seqInc(firstDigit, numLen) {
    let num = 0
    let digit = firstDigit
    let part = 0
    for (let i = numLen; digit >= 0 && digit <= 9 && i >= 0; i--) {
      part = digit * 10 ** i
      num = num + part
      if (digit === 0 && i > 0) {
        num = -1
        break
      }
      digit++
      if (digit === 10) {
        digit = 0
      }
    }
    CatchCarMileage.trace(`seqInc - ${firstDigit} ${numLen} ${num}`)
    return num
  }

  static isInteresting(number, awesomePhrases) {
    // Go to town!

    CatchCarMileage.trace(`>CatchCarmMileage::isInteresting ${number} [${awesomePhrases.toString()}]`)

    const no = 0
    const almost = 1
    const yes = 2
    const numsToCheck = awesomePhrases

    let interesting = no

    if (number <= 99 || number >= 1000000000) {
      CatchCarMileage.trace(`<CatchCarmMileage::isInteresting ${interesting}`)
      CatchCarMileage.traceout()
      return no
    }

    let sequentials = {
      up: [],
      down: [],
    }

    let numLen = 0
    let firstDigit = -1
    for (let i = 10; i <= number; i *= 10) {
      firstDigit = Math.floor((number % (i * 10)) / i)
      numLen++
    }
    const tenToThe = 10 ** numLen

    CatchCarMileage.trace(`AL - ${number} ${firstDigit} ${numLen} ${tenToThe}`)

    // Add for Zeros
    numsToCheck.push(firstDigit * tenToThe)
    numsToCheck.push((firstDigit + 1) * tenToThe)

    //Add for all same digit
    //allSameDigit
    numsToCheck.push(CatchCarMileage.allSameDigit(firstDigit, numLen))

    //Add for all The digits are sequential, incementing†: 1234
    numsToCheck.push(CatchCarMileage.seqInc(firstDigit, numLen))

    //    The digits are sequential, decrementing‡: 4321
    numsToCheck.push(CatchCarMileage.seqDec(firstDigit, numLen))

    //    The digits are a palindrome: 1221 or 73837
    // numsToCheck.push(CatchCarMileage.palindrome(firstDigit, numLen))

    CatchCarMileage.trace(`numsToCheck[${numsToCheck.toString()}]`)

    if (interesting != yes) {
      for (const n of numsToCheck) {
        if (n === number) {
          interesting = yes
          CatchCarMileage.trace(`numsToCheck ${n} === ${number} ${interesting}`)
          break
        } else if (number >= n - 2 && number < n) {
          interesting = almost
          CatchCarMileage.trace(`numsToCheck ${number} is almost ${n}  ${number >= n - 2} ${number < n}`)
        }
      }
    }

    CatchCarMileage.trace(`<CatchCarmMileage::isInteresting ${interesting}`)
    CatchCarMileage.traceout()
    return interesting
  }
}
