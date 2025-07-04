const { add } = require('./calculator');

test('empty string returns 0', () => {
  expect(add('')).toBe(0);
});

test('single number returns its value', () => {
  expect(add('5')).toBe(5);
});

test('two numbers, comma delimited, returns the sum', () => {
  expect(add('1,2')).toBe(3);
});

test('supports custom delimiter', () => {
  expect(add('//;\n1;2')).toBe(3);
});


test('throws on negative numbers with message', () => {
  expect(() => add('1,-2,-3')).toThrow('negative numbers not allowed: -2,-3');
});