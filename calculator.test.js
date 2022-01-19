const calculator = require('./calculator');

describe('Calculator', () => {
  test('2 + 3 = 5', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test('6 - 2 = 4', () => {
    expect(calculator.subtract(6, 2)).toBe(4)
  });

  test('6 / 2 = 3', () => {
    expect(calculator.divide(6, 2)).toBe(3);
  });

  test('2 * 3 = 6', () => {
    expect(calculator.multiply(2, 3)).toBe(6)
  });
});