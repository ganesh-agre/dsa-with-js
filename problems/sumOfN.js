function sumOfNNumbersRecursive(number) {
  if (number === 1) {
    return 1;
  }

  return number + sumOfNNumbersRecursive(number - 1);
}

function sumOfNNumbers(number) {
  let result = 0;
  for (let index = 1; index <= number; index++) {
    result += index;
  }
  return result;
}

console.log(sumOfNNumbersRecursive(5));
console.log(sumOfNNumbers(5));
