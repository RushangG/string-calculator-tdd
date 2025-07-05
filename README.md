# Incubyte String Calculator (TDD Kata)

## Project Overview

This project implements a robust String Calculator as part of the Incubyte TDD Assessment. The goal is to practice Test Driven Development (TDD) using JavaScript and Jest, while demonstrating clean code, maintainability, and professionalism.

---

## Why I Chose JavaScript & Jest

I selected **JavaScript** because it is versatile, beginner-friendly, and widely used for both front-end and back-end development. It allows for rapid prototyping and clear demonstration of algorithms.

I chose **Jest** because it is a powerful and easy-to-use testing framework. Jest supports features like snapshot testing and built-in mocks, making it perfect for TDD and ensuring high code quality.

---

## What is TDD & Why is it Important?

**Test Driven Development (TDD)** is a software development approach where you write tests *before* writing the actual code. This ensures:
- Code is thoroughly tested from the start.
- Requirements are clear and met.
- Refactoring is safe and easy.
- Code quality and maintainability are improved.

---

## My Approach to Clean Code & Craftsmanship

- **Readable:** Simple, well-named functions and variables.
- **Maintainable:** Modular code and clear separation of concerns.
- **Well-tested:** All edge cases covered with meaningful test names.
- **Consistent:** Used ESLint for code style and formatting.

---

## Features

- Returns `0` for an empty string input.
- Returns the number itself when only one number is provided.
- Adds numbers separated by commas or newlines.
- Supports any amount of numbers.
- Supports custom single or multi-character delimiters (e.g. `//;\n1;2`, `//[***]\n1***2***3`).
- Supports multiple delimiters (e.g. `//[*][%]\n1*2%3`, `//[***][%%]\n1***2%%3`).
- Ignores numbers greater than 1000 (e.g. `2,1001` returns `2`).
- Throws an exception when negative numbers are provided, listing all negative numbers in the error message.
- Tracks the number of times the `add()` method is called (`getCalledCount()`).
- **Extensive test cases:** All advanced cases and edge conditions are tested, including custom delimiter syntax, multiple and multi-character delimiters, negative number checks, and numbers > 1000.

---

## How to Run the Code and Tests

1. **Clone the repository**
   ```bash
   git clone https://github.com/RushangG/string-calculator-tdd.git
   cd string-calculator-tdd
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run linting**
   ```bash
   npm run lint
   ```

4. **Run tests**
   ```bash
   npm test
   ```

   > **Note:** Snapshot tests are included and up-to-date. If you change logic or add new outputs, update snapshots with:
   > ```bash
   > npm test -- -u
   > ```

---

## Example Usage

```js
const { StringCalculator } = require('./calculator');
const calc = new StringCalculator();

console.log(calc.add("")); // 0
console.log(calc.add("1")); // 1
console.log(calc.add("1,2")); // 3
console.log(calc.add("1\n2,3")); // 6
console.log(calc.add("//;\n1;2")); // 3
console.log(calc.add("//[***]\n1***2***3")); // 6
console.log(calc.add("//[*][%]\n1*2%3")); // 6
console.log(calc.add("//[***][%%]\n1***2%%3")); // 6
console.log(calc.add("2,1001")); // 2
console.log(calc.getCalledCount()); // 9
```

---

## Test Coverage

The solution is extensively tested with Jest, including snapshot testing. Covered scenarios include:

- Empty string input.
- Single number input.
- Two and multiple numbers (comma delimited).
- Newlines as delimiters.
- Custom single-character delimiters.
- Custom multi-character delimiters.
- Multiple delimiters (including multi-character and combinations).
- Numbers greater than 1000 are ignored.
- Negative numbers throw errors listing all negative values.
- `getCalledCount()` method works.
- **All new and advanced edge cases are covered via updated test suite.**

You can view all the test cases in [`calculator.test.js`](./calculator.test.js).

---

## Screenshot of Passing Tests

Below is a screenshot showing all tests passing in VS Code:

![Screenshot of passing tests](tests-passing.png)

---

## Code Quality & Linting

- The codebase follows best practices, with ESLint configured for consistency.
- JSDoc comments are included for main functions.

---

## About Me

Hi! I’m Rushang Gajera, a passionate developer who loves clean code and learning new things.  
- [Email](mailto:gajerarushang17@gmail.com)

**Thank you for reviewing my assignment! I look forward to your feedback.**