function twoSum(sum, numbers) {
  let complment = {};
  for (let index = 0; index < numbers.length; index++) {
    const differance = sum - numbers[index];
    if (differance in complment) return [complment[differance], index];
    complment[numbers[index]] = index;
  }
  return false;
}

console.log(twoSum(5, [3, 1, 2]));
