const { add } = require('./calculator');

test('empty string returns 0', () => {
  expect(add('')).toBe(0);
  expect(add('')).toMatchSnapshot();
});

test('single number returns its value', () => {
  expect(add('5')).toBe(5);
  expect(add('5')).toMatchSnapshot();
});

test('two numbers, comma delimited, returns the sum', () => {
  expect(add('1,2')).toBe(3);
  expect(add('1,2')).toMatchSnapshot();
});

test('multiple numbers, comma delimited', () => {
  expect(add('1,2,3,4')).toBe(10);
  expect(add('1,2,3,4')).toMatchSnapshot();
});

test('numbers separated by newlines and commas', () => {
  expect(add('1\n2,3')).toBe(6);
  expect(add('1\n2,3')).toMatchSnapshot();
});

test('supports custom single-character delimiter', () => {
  expect(add('//;\n1;2')).toBe(3);
  expect(add('//;\n1;2')).toMatchSnapshot();
});

test('supports custom multi-character delimiter', () => {
  expect(add('//[***]\n1***2***3')).toBe(6);
  expect(add('//[***]\n1***2***3')).toMatchSnapshot();
});

test('supports multiple custom delimiters', () => {
  expect(add('//[*][%]\n1*2%3')).toBe(6);
  expect(add('//[*][%]\n1*2%3')).toMatchSnapshot();
});

test('supports multiple multi-character delimiters', () => {
  expect(add('//[***][%%]\n1***2%%3')).toBe(6);
  expect(add('//[***][%%]\n1***2%%3')).toMatchSnapshot();
});

test('ignores numbers larger than 1000', () => {
  expect(add('2,1001')).toBe(2);
  expect(add('2,1001')).toMatchSnapshot();
  expect(add('//;\n1000;1;2000')).toBe(1001);
  expect(add('//;\n1000;1;2000')).toMatchSnapshot();
});

test('throws on negative numbers with message (single negative)', () => {
  expect(() => add('1,2,-3')).toThrow('negative numbers not allowed: -3');
});

test('throws on negative numbers with message (multiple negatives)', () => {
  expect(() => add('1,-2,-3')).toThrow('negative numbers not allowed: -2,-3');
});

test('throws on negative numbers with custom delimiter', () => {
  expect(() => add('//;\n-1;2')).toThrow('negative numbers not allowed: -1');
});