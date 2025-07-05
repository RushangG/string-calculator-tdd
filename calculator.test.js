const { StringCalculator } = require('./calculator');

// Step 1: An empty string returns 0
test('empty string returns 0', () => {
  const calc = new StringCalculator();
  expect(calc.add('')).toBe(0);
  expect(calc.add('')).toBe(0); // Call again to increment count
  expect(calc.getCalledCount()).toBe(2);
  expect(calc.add('')).toMatchSnapshot();
});

// Step 2: A single number returns its value
test('single number returns its value', () => {
  const calc = new StringCalculator();
  expect(calc.add('1')).toBe(1);
  expect(calc.getCalledCount()).toBe(1);
  expect(calc.add('1')).toMatchSnapshot();
});

// Step 3: Two numbers, comma delimited, returns the sum
test('two numbers returns their sum', () => {
  const calc = new StringCalculator();
  expect(calc.add('1,2')).toBe(3);
  expect(calc.getCalledCount()).toBe(1);
  expect(calc.add('1,2')).toMatchSnapshot();
});

// Step 4: An unknown amount of numbers
test('multiple numbers returns their sum', () => {
  const calc = new StringCalculator();
  expect(calc.add('1,2,3')).toBe(6);
  expect(calc.add('4,5,6,7')).toBe(22);
  expect(calc.getCalledCount()).toBe(2);
  expect(calc.add('1,2,3')).toMatchSnapshot();
  expect(calc.add('4,5,6,7')).toMatchSnapshot();
});

// Step 5: New lines between numbers (in addition to commas)
test('numbers separated by commas or newlines', () => {
  const calc = new StringCalculator();
  expect(calc.add('1\n2,3')).toBe(6);
  expect(calc.add('4\n5\n6')).toBe(15);
  expect(calc.getCalledCount()).toBe(2);
  expect(calc.add('1\n2,3')).toMatchSnapshot();
  expect(calc.add('4\n5\n6')).toMatchSnapshot();
});

// Step 6: Support custom single-character delimiter
test('supports custom single-character delimiter', () => {
  const calc = new StringCalculator();
  expect(calc.add('//;\n1;2')).toBe(3);
  expect(calc.add('//-\n4-3')).toBe(7);
  expect(calc.getCalledCount()).toBe(2);
  expect(calc.add('//;\n1;2')).toMatchSnapshot();
  expect(calc.add('//-\n4-3')).toMatchSnapshot();
});

// Step 7: Negative numbers throw an exception listing all negatives
test('throws on negative numbers with message', () => {
  const calc = new StringCalculator();
  expect(() => calc.add('1,-2,-3')).toThrow('negative numbers not allowed: -2,-3');
  expect(() => calc.add('//;\n-1;2;-3')).toThrow('negative numbers not allowed: -1,-3');
  expect(calc.getCalledCount()).toBe(2);
});

// Step 8: Numbers bigger than 1000 are ignored
test('ignores numbers bigger than 1000', () => {
  const calc = new StringCalculator();
  expect(calc.add('2,1001')).toBe(2);
  expect(calc.add('1000,1')).toBe(1001);
  expect(calc.getCalledCount()).toBe(2);
  expect(calc.add('2,1001')).toMatchSnapshot();
  expect(calc.add('1000,1')).toMatchSnapshot();
});

// Step 9: Delimiters can be of any length
test('supports custom multi-character delimiter', () => {
  const calc = new StringCalculator();
  expect(calc.add('//[***]\n1***2***3')).toBe(6);
  expect(calc.add('//[abc]\n4abc5abc6')).toBe(15);
  expect(calc.getCalledCount()).toBe(2);
  expect(calc.add('//[***]\n1***2***3')).toMatchSnapshot();
  expect(calc.add('//[abc]\n4abc5abc6')).toMatchSnapshot();
});

// Step 10: Multiple delimiters
test('supports multiple delimiters', () => {
  const calc = new StringCalculator();
  expect(calc.add('//[*][%]\n1*2%3')).toBe(6);
  expect(calc.add('//[;][,]\n4;5,6')).toBe(15);
  expect(calc.getCalledCount()).toBe(2);
  expect(calc.add('//[*][%]\n1*2%3')).toMatchSnapshot();
  expect(calc.add('//[;][,]\n4;5,6')).toMatchSnapshot();
});

// Step 11: Multiple delimiters with length longer than one char
test('supports multiple multi-character delimiters', () => {
  const calc = new StringCalculator();
  expect(calc.add('//[***][%%]\n1***2%%3')).toBe(6);
  expect(calc.add('//[##][@@]\n4##5@@6')).toBe(15);
  expect(calc.getCalledCount()).toBe(2);
  expect(calc.add('//[***][%%]\n1***2%%3')).toMatchSnapshot();
  expect(calc.add('//[##][@@]\n4##5@@6')).toMatchSnapshot();
});

// Special test for GetCalledCount
test('GetCalledCount returns number of times add was called', () => {
  const calc = new StringCalculator();
  expect(calc.getCalledCount()).toBe(0);
  calc.add("1,2");
  expect(calc.getCalledCount()).toBe(1);
  calc.add("3,4,5");
  expect(calc.getCalledCount()).toBe(2);
});