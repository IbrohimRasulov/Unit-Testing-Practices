const stringLength = require('./stringLength');

test('Return string length 7', () => {
  expect(stringLength('Ibrohim')).toBe(7);
});

test('Return error if str length is less than 1', () => {
  expect(stringLength('')).toThrow(Error);
});

test('Return error if str length is more than 10', () => {
  expect(stringLength('helloWorld')).toThrow(Error);
});