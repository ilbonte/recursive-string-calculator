/* global test */
const {equal} = require('assert')
const {add} = require('..')

test('string calculator', () => {
  test('empty string returns 0', () => {
    equal(add(''), 0)
  })

  test('string with single number returns numeric value', () => {
    equal(add('1'), 1)
    equal(add('2'), 2)
    equal(add('3'), 3)
  })

  test('string with two numbers returns their sum', () => {
    equal(add('1,2'), 3)
  })

  test('string with unknown amount of numbers returns their sum', () => {
    equal(add('1,2,3'), 6)
    equal(add('1,2,3,4,5,6,7,8'), 36)
  })

  test('handles newline character as delimiter', () => {
    equal(add('1\n2'), 3)
    equal(add('1\n2,3'), 6)
  })
})
