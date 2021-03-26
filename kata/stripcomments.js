"use strict"

function solution(input, markers) {
  const strings = input.split("\n")
  let retstrings = []

  for (const str of strings) {
    let commentIndex = str.length
    for (const char of markers) {
      const idx = str.indexOf(char)
      if (idx >= 0 && idx < commentIndex) {
        commentIndex = idx
      }
    }

    //console.log("|" + str + "|\n" + "|" + str.slice(0, commentIndex).toString().trim() + "|")
    retstrings.push(str.slice(0, commentIndex).toString().trim())
  }

  return retstrings.join("\n")
}

function solution2(input, markers) {
  return input
    .split("\n")
    .map((line) => {
      markers.reduce((line, marker) => {
        line.split(marker)[0].trim(), line
      })
    })
    .join("\n")
}

module.exports = {
  solution,
  solution2,
}
