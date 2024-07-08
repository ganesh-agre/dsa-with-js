function fibonacci(number, memo = {}) {
  if (memo[number]) return memo[number];
  if (number === 0) return number;
  if (number === 1 || number === 2) return 1;
  memo[number] =
    fibonacci(number - 1, memo) +
    fibonacci(number - 2, memo) +
    fibonacci(number - 3, memo);
  return memo[number];
}

console.log(fibonacci(5));
