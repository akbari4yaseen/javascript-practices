// Sum All Numbers in a Range
const sumAll = (arr) => {
  const lowest = Math.min(...arr);
  const largest = Math.max(...arr);
  let sum = 0;

  for (let i = lowest; i <= largest; i++) {
    sum += i;
  }
  return sum;
};
/* The function passes an array of two numbers.
Return the sum of those two numbers
plus the sum of all the numbers between them.
The lowest number will not always come first. */
sumAll([10, 2]);
sumAll([5, 20]);
