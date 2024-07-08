function factorial(n, memo = {}) {
  if (memo[n]) memo[n];
  if (n <= 1) return 1;
  memo[n] = n * factorial(n - 1, memo);
  return memo[n];
}

console.log(factorial(5));
