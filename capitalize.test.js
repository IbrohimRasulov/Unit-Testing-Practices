const capitalize = require('./capitalize');

test('Capitalize "tashkent"', () => {
  expect(capitalize('tashkent')).toBe('Tashkent');
});