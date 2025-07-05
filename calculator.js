
function add(numbers) {
  if (!numbers) return 0;

  // Set default delimiters: comma and newline
  let delimiters = [',', '\n'];
  let numberString = numbers;

  // Check for custom delimiter syntax at the start
  if (numbers.startsWith('//')) {
    // Split out custom delimiter section and the rest of the numbers
    const delimiterSectionEnd = numbers.indexOf('\n');
    const delimiterSection = numbers.slice(2, delimiterSectionEnd);
    numberString = numbers.slice(delimiterSectionEnd + 1);

    // Handle multiple delimiters (e.g., //[***][%]\n)
    const delimiterMatches = delimiterSection.match(/\[([^\]]+)\]/g);
    if (delimiterMatches) {
      delimiters = delimiterMatches.map(d => d.slice(1, -1)); // Remove brackets
    } else {
      // Single-character delimiter (e.g., //;\n)
      delimiters = [delimiterSection];
    }
  }

  // Create regex for all delimiters
  const delimiterRegex = new RegExp(delimiters.map(escapeRegExp).join('|'), 'g');

  // Split input into numbers, convert to Number
  const numberList = numberString
    .split(delimiterRegex)
    .filter(Boolean)
    .map(Number);

  // Throw if any negatives found (list all)
  const negatives = numberList.filter(n => n < 0);
  if (negatives.length) {
    throw new Error(`negative numbers not allowed: ${negatives.join(',')}`);
  }

  // Sum numbers, ignoring those > 1000
  return numberList
    .filter(n => n <= 1000)
    .reduce((sum, n) => sum + n, 0);
}

// Escape RegExp special characters for delimiter splitting
function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

module.exports = { add };