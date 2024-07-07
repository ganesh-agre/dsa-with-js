function fibonacci(number) {
  let num1 = 0,
    num2 = 1,
    result;
  for (let index = 0; index < number; index++) {
    result = num1 + num2;
    num1 = num2;
    num2 = result;
  }
  return num1;
}

function fibonacciRecursive(number, memo = {}) {
  if (number in memo) {
    return memo[number];
  }

  if (number <= 1) {
    return number;
  }

  memo[number] =
    fibonacciRecursive(number - 1, memo) + fibonacciRecursive(number - 2, memo);
  return memo[number];
}

console.log(fibonacci(5));
console.log(fibonacciRecursive(8));
