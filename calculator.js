function add(numbers) {
  if (numbers === '') return 0;
  const delimiters = /,|\n/;
  return numbers
    .split(delimiters)
    .map(Number)
    .reduce((sum, curr) => sum + curr, 0);
}
module.exports = { add };