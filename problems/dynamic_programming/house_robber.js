function houserobber(nums, i = 0, memo = {}) {
  if (memo[i]) return memo[i];
  if (i >= nums.length) return 0;

  const skip = houserobber(nums, i + 1, memo);
  const take = nums[i] + houserobber(nums, i + 2, memo);

  memo[i] = Math.max(skip, take);

  return memo[i];
}

console.log(houserobber([2, 7, 9, 3, 1]));
