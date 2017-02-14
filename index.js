const delimiters = [',', '\n']

exports.add = add

/* add :: string -> number */
function add (stringOfNumbers) {
  if (containsCustomDelimiter(stringOfNumbers)) {
    const delimiter = extractCustomDelimiterFrom(stringOfNumbers)
    delimiters.push(delimiter)
    stringOfNumbers = stringOfNumbers.substring(4)
  }

  if(containsNegativeNumbers(stringOfNumbers)){
        const negatives = extractNegativeNumbersFrom(stringOfNumbers)
        return () => {throw new Error(`negatives not allowed: ${negatives}`)}
   }

  if (containsSingleNumber(stringOfNumbers)) {
    return parseInt(stringOfNumbers)
  }

  if (containsUnknownAmountOfNumbers(stringOfNumbers)) {
    return stringOfNumbers
    .split(new RegExp(toCharacterSet(delimiters)))
    .filter(numbesLowerThan(1000))    
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
  const normalizedDelimiters = toCharacterSet(delimiters).replace('\\', '\\\\')
  const matcher = new RegExp(`^(\\d+)(${normalizedDelimiters}(\\d+))+$`)
  return matcher.test(stringOfNumbers)
}

/* containsCustomDelimiter :: string -> boolean */
function containsCustomDelimiter (stringOfNumbers) {
  return /^\/\/.\n/.test(stringOfNumbers)
}

/* extractCustomDelimiterFrom :: string -> boolean */
function extractCustomDelimiterFrom (stringOfNumbers) {
  return stringOfNumbers.match(/^\/\/(.)\n/)[1]
}

/* toCharacterSet :: array<string> -> string */
function toCharacterSet (characters) {
  return `[${delimiters.join('')}]`
}

/* containsNegativeNumbers :: string -> boolean */
function containsNegativeNumbers (stringOfNumbers){  
  return /-\d*/.test(stringOfNumbers)
}

/* extractNegativeNumbersFrom :: string -> string */
function extractNegativeNumbersFrom(stringOfNumbers){
  return stringOfNumbers.match(/(-\d)/g).toString(',')
}

function numbesLowerThan(expected) {
  return number => parseInt(number) < expected
}