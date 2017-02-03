const {equal} = require('assert')
const stringCalculator = require('..')

test('string calculator', () => {
  test('empty string returns 0', () => {
    equal( stringCalculator(""), 0)
  })
})