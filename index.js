const delimiters = '[,\n]'

exports.add = add

/* add :: string -> number */
function add (stringOfNumbers) {
  if (containsSingleNumber(stringOfNumbers)) {
    return parseInt(stringOfNumbers)
  }

  if (containsUnknownAmountOfNumbers(stringOfNumbers)) {
    return stringOfNumbers
    .split(new RegExp(delimiters))
    .map(add)
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
  const normalizedDelimiters = delimiters.replace('\\', '\\\\')
  const matcher = new RegExp(`^(\\d+)(${normalizedDelimiters}(\\d+))+$`)
  return matcher.test(stringOfNumbers)
}
