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
})