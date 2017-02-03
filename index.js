module.exports = function stringCalculator (stringOfNumbers) {
  if (containsSingleNumber(stringOfNumbers)) {
    return parseInt(stringOfNumbers)
  }

  if (containsUnknownAmountOfNumbers(stringOfNumbers)) {
    return stringOfNumbers
    .split(',')
    .map(stringCalculator)
    .reduce((acc, curr, arr) => acc + curr)
  }
  
  return 0
}

/* containsSingleNumber :: string -> boolean */
function containsSingleNumber (stringOfNumbers) {
  return /^\d+$/.test(stringOfNumbers)
}

/* containsUnknownAmountOfNumbers :: string -> boolean */
function containsUnknownAmountOfNumbers (stringOfNumbers) {
  return /^(\d+)(,(\d+))+$/.test(stringOfNumbers)
}