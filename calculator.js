class StringCalculator {
  constructor() {
    this.calledCount = 0;
  }

  add(numbers) {
    this.calledCount++;
    if (!numbers) return 0;

    let delimiters = [',', '\n'];
    let numberString = numbers;

    if (numbers.startsWith('//')) {
      const delimiterSectionEnd = numbers.indexOf('\n');
      const delimiterSection = numbers.slice(2, delimiterSectionEnd);
      numberString = numbers.slice(delimiterSectionEnd + 1);
      const delimiterMatches = delimiterSection.match(/\[([^\]]+)\]/g);
      if (delimiterMatches) {
        delimiters = delimiterMatches.map(d => d.slice(1, -1));
      } else {
        delimiters = [delimiterSection];
      }
    }

    const delimiterRegex = new RegExp(delimiters.map(StringCalculator.escapeRegExp).join('|'), 'g');
    const numberList = numberString
      .split(delimiterRegex)
      .filter(Boolean)
      .map(Number);

    const negatives = numberList.filter(n => n < 0);
    if (negatives.length) throw new Error(`negative numbers not allowed: ${negatives.join(',')}`);

    return numberList.filter(n => n <= 1000).reduce((sum, n) => sum + n, 0);
  }

  getCalledCount() {
    return this.calledCount;
  }

  static escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}

module.exports = { StringCalculator };