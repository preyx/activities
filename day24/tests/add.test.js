const adder = require('../adder.js')

describe('Adder testing suite', () => {
  test('1 + 1 = 2', () => {
    expect(adder(1, 1)).toBe(2)
  })
  test('\'1\' + \'1\' = \'11\'', () => {
    expect(adder('1', '1')).toBe('11')
  })
  test('\'1\' + 1 = \'11\'', () => {
    expect(adder('1', 1)).toBe('11')
  })
  test('\'a\' + 1 = \'a1\'', () => {
    expect(adder('a', 1)).toBe('a1')
  })
})

const subbr = require('../subbr.js')

describe('Subbr testing suite', () => {
  test('1 - 1 = 0', () => {
    expect(subbr(1, 1)).toBe(0)
  })
  test('\'1\' - \'1\' = 0', () => {
    expect(subbr('1', '1')).toBe(0)
  })
  test('\'1\' - 1 = 0', () => {
    expect(subbr('1', 1)).toBe(0)
  })
  test('\'a\' - 1 = NaN', () => {
    expect(subbr('a', 1)).toBeNaN()
  })
})
