

function add(numbers) {
  if (!numbers) return 0;

  // Default delimiters
  let delimiters = [',', '\n'];
  let numberString = numbers;

  // Check for custom delimiters
  if (numbers.startsWith('//')) {
    const delimiterSectionEnd = numbers.indexOf('\n');
    const delimiterSection = numbers.slice(2, delimiterSectionEnd);
    numberString = numbers.slice(delimiterSectionEnd + 1);

    // Multi/multiple delimiters
    const delimiterMatches = delimiterSection.match(/\[([^\]]+)\]/g);
    if (delimiterMatches) {
      delimiters = delimiterMatches.map(d => d.slice(1, -1));
    } else {
      delimiters = [delimiterSection];
    }
  }

  // Build regex for splitting
  const delimiterRegex = new RegExp(delimiters.map(escapeRegExp).join('|'), 'g');

  // Parse numbers
  const numberList = numberString
    .split(delimiterRegex)
    .filter(Boolean)
    .map(Number);

  // Throw if any negatives
  const negatives = numberList.filter(n => n < 0);
  if (negatives.length) throw new Error(`negative numbers not allowed: ${negatives.join(',')}`);

  // Sum, ignoring >1000
  return numberList.filter(n => n <= 1000).reduce((sum, n) => sum + n, 0);
}

// Escape RegExp special chars
function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

module.exports = { add };