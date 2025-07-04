const { add } = require('./calculator');

test('empty string returns 0', () => {
  expect(add('')).toBe(0);
});

test('single number returns its value', () => {
  expect(add('5')).toBe(5);
});