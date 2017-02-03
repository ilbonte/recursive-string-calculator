module.exports = stringOfNumbers => {
  if (containsSingleNumber(stringOfNumbers)) {
    return parseInt(stringOfNumbers)
  }
  return 0
}

/* containsSingleNumber :: string -> boolean */
function containsSingleNumber (stringOfNumbers) {
  return /^\d+$/.test(stringOfNumbers)
}