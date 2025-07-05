const { add } = require('./calculator');

// Step 1: An empty string returns 0
test('empty string returns 0', () => {
  expect(add('')).toBe(0);
  expect(add('')).toMatchSnapshot();
});

// Step 2: A single number returns its value
test('single number returns its value', () => {
  expect(add('1')).toBe(1);
  expect(add('1')).toMatchSnapshot();
});

// Step 3: Two numbers, comma delimited, returns the sum
test('two numbers returns their sum', () => {
  expect(add('1,2')).toBe(3);
  expect(add('1,2')).toMatchSnapshot();
});

// Step 4: An unknown amount of numbers
test('multiple numbers returns their sum', () => {
  expect(add('1,2,3')).toBe(6);
  expect(add('4,5,6,7')).toBe(22);
  expect(add('1,2,3')).toMatchSnapshot();
  expect(add('4,5,6,7')).toMatchSnapshot();
});

// Step 5: New lines between numbers (in addition to commas)
test('numbers separated by commas or newlines', () => {
  expect(add('1\n2,3')).toBe(6);
  expect(add('4\n5\n6')).toBe(15);
  expect(add('1\n2,3')).toMatchSnapshot();
  expect(add('4\n5\n6')).toMatchSnapshot();
});

// Step 6: Support custom single-character delimiter
test('supports custom single-character delimiter', () => {
  expect(add('//;\n1;2')).toBe(3);
  expect(add('//-\n4-3')).toBe(7);
  expect(add('//;\n1;2')).toMatchSnapshot();
  expect(add('//-\n4-3')).toMatchSnapshot();
});

// Step 7: Negative numbers throw an exception listing all negatives
test('throws on negative numbers with message', () => {
  expect(() => add('1,-2,-3')).toThrow('negative numbers not allowed: -2,-3');
  expect(() => add('//;\n-1;2;-3')).toThrow('negative numbers not allowed: -1,-3');
});

// Step 8: Numbers bigger than 1000 are ignored
test('ignores numbers bigger than 1000', () => {
  expect(add('2,1001')).toBe(2);
  expect(add('1000,1')).toBe(1001);
  expect(add('2,1001')).toMatchSnapshot();
  expect(add('1000,1')).toMatchSnapshot();
});

// Step 9: Delimiters can be of any length
test('supports custom multi-character delimiter', () => {
  expect(add('//[***]\n1***2***3')).toBe(6);
  expect(add('//[abc]\n4abc5abc6')).toBe(15);
  expect(add('//[***]\n1***2***3')).toMatchSnapshot();
  expect(add('//[abc]\n4abc5abc6')).toMatchSnapshot();
});

// Step 10: Multiple delimiters
test('supports multiple delimiters', () => {
  expect(add('//[*][%]\n1*2%3')).toBe(6);
  expect(add('//[;][,]\n4;5,6')).toBe(15);
  expect(add('//[*][%]\n1*2%3')).toMatchSnapshot();
  expect(add('//[;][,]\n4;5,6')).toMatchSnapshot();
});

// Step 11: Multiple delimiters with length longer than one char
test('supports multiple multi-character delimiters', () => {
  expect(add('//[***][%%]\n1***2%%3')).toBe(6);
  expect(add('//[##][@@]\n4##5@@6')).toBe(15);
  expect(add('//[***][%%]\n1***2%%3')).toMatchSnapshot();
  expect(add('//[##][@@]\n4##5@@6')).toMatchSnapshot();
});