const stringLength = require('./stringLength');

test('Return string length 11', () => {
  expect(stringLength('GoodMorning')).toBe(11);
});