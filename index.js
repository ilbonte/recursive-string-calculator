module.exports = function stringCalculator (stringOfNumbers) {
  if (containsSingleNumber(stringOfNumbers)) {
    return parseInt(stringOfNumbers)
  }
  if (containsTwoNumbers(stringOfNumbers)) {
    const [first, second] = stringOfNumbers.split(',').map(stringCalculator)
    return stringCalculator(first) + stringCalculator(second)
  }
  return 0
}

/* containsSingleNumber :: string -> boolean */
function containsSingleNumber (stringOfNumbers) {
  return /^\d+$/.test(stringOfNumbers)
}

/* containsSingleNumber :: string -> boolean */
function containsTwoNumbers (stringOfNumbers) {
  return /^(\d+),(\d+)$/.test(stringOfNumbers)
}