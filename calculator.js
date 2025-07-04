function add(numbers) {
  if (numbers === '') return 0;
  let delimiter = /,|\n/;
  if (numbers.startsWith('//')) {
    const parts = numbers.split('\n');
    delimiter = new RegExp(parts[0].slice(2));
    numbers = parts[1];
  }
  return numbers
    .split(delimiter)
    .map(Number)
    .reduce((sum, curr) => sum + curr, 0);
}

module.exports = { add };