function minCoinCount(amount, coins, memo = {}) {
  if (memo[amount]) return memo[amount];
  if (amount === 0) return 0;
  if (amount < 0) return -1;
  let minCoinsCount = Infinity;
  for (const coin of coins) {
    let result = minCoinCount(amount - coin, coins, memo);
    if (result !== -1) {
      minCoinsCount = Math.min(minCoinsCount, result + 1);
    }
  }
  memo[amount] = minCoinsCount === Infinity ? -1 : minCoinsCount;
  return memo[amount];
}

function minCoinCountWithCoins(amount, coins, memo = {}) {
  if (memo[amount]) return memo[amount];
  if (amount === 0) return { count: 0, coins: [] };
  if (amount < 0) return { count: -1, coins: [] };

  let minCoinsCount = Infinity;
  let minCoins = [];
  for (const coin of coins) {
    let result = minCoinCountWithCoins(amount - coin, coins, memo);
    if (result.count !== -1) {
      minCoinsCount = Math.min(minCoinsCount, result.count + 1);
      minCoins = [...result.coins, coin];
    }
  }

  memo[amount] =
    minCoinsCount === Infinity
      ? { count: -1, coins: [] }
      : { count: minCoinsCount, coins: minCoins };
  return memo[amount];
}

console.log(minCoinCount(4, [2, 3]));
console.log(minCoinCountWithCoins(4, [2, 3]));
