const stringLength = require('./stringLength');

str = 'Ibrohim';

test('Return string length 7', () => {
  expect(stringLength(str)).toBe(7);
});

test('Return error if str length is less than 1', () => {
  expect(stringLength(str)).toBeGreaterThan(0);
  expect(stringLength(str)).toBeLessThanOrEqual(10);
});