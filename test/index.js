const {equal} = require('assert')
const stringCalculator = require('..')

test('string calculator', () => {
  test('empty string returns 0', () => {
    equal( stringCalculator(""), 0)
  })

  test('string with single number returns numeric value', () => {
    equal( stringCalculator("1"), 1)
    equal( stringCalculator("2"), 2)
    equal( stringCalculator("3"), 3)
  })

  test('string with two numbers returns their sum', () => {
    equal( stringCalculator("1,2"), 3)
  })

  test('string with unknown amount of numbers returns their sum', () => {
    equal( stringCalculator("1,2,3"), 6)
    equal( stringCalculator("1,2,3,4,5,6,7,8"), 36)
  })

  test('handles newline character as delimiter', () => {
    equal( stringCalculator("1\n2"), 3)
    equal( stringCalculator("1\n2,3"), 6)
  })
})