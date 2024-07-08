function twoSum(sum, arr) {
  const complement = {};
  for (let index = 0; index < arr.length; index++) {
    const difference = sum - arr[index];
    if (difference in complement) return complement[difference] + " " + index;
    complement[arr[index]] = index;
  }
}

console.log(twoSum(5, [2, 1, 3]));
