function coinSum(amount, array, memo = {}) {
  if (amount in memo) return memo[amount];
  if (amount === 0) return true;
  if (amount < 0) return false;
  for (let index = 0; index < array.length; index++) {
    if (coinSum(amount - array[index], array, memo)) {
      memo[amount] = true;
      return true;
    }
  }
  memo[amount] = false;
  return false;
}

console.log(coinSum(4, [1, 2, 3]));
