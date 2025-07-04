# Incubyte String Calculator (TDD Kata)

## Project Overview

This project implements a simple String Calculator as part of the Incubyte TDD Assessment. The goal is to practice Test Driven Development (TDD) using JavaScript and Jest. The calculator can add numbers provided in a string format, supporting requirements as they are introduced incrementally through tests.

---

## Features

- Returns `0` for an empty string input.
- Returns the number itself when only one number is provided.
- Adds two comma-separated numbers.
- Supports any amount of comma- or newline-separated numbers.
- Supports custom single-character delimiters (e.g. `//;\n1;2`).
- Throws an exception when negative numbers are provided, listing all negative numbers in the error message.

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

3. **Run tests**
   ```bash
   npm test
   ```

---

## Description of My TDD Process

1. **Start Simple:** I began by writing the first test for the simplest requirement (e.g., empty string returns 0).
2. **Red/Green/Refactor:** I wrote just enough code to make the test pass, then refactored if necessary.
3. **Incremental Requirements:** I added the next test for each new requirement (one number, two numbers, custom delimiters, negatives, etc.), letting the tests drive the implementation.
4. **Repeat:** I repeated this cycle, ensuring every new feature had a corresponding test before implementation.
5. **Fully Tested:** This process continued until all requirements were satisfied and the codebase was fully tested.

---

## Example Usage

```js
const { add } = require('./calculator');

console.log(add("")); // 0
console.log(add("1")); // 1
console.log(add("1,2")); // 3
console.log(add("1\n2,3")); // 6
console.log(add("//;\n1;2")); // 3
```

---

## Screenshot of Passing Tests

Below is a screenshot showing all tests passing in VS Code:

![Screenshot of passing tests](tests-passing.png)

---

## Contact

Feel free to reach out if you have any questions, suggestions, or feedback!