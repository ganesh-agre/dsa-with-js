function powerRecursively(number, power) {
  if (power === 0) {
    return 1;
  }

  return number * powerRecursively(number, power - 1);
}

function power(number, power) {
  let result = 1;
  for (let index = 0; index < power; index++) {
    result = result * number;
  }
  return result;
}
console.log(powerRecursively(2, 3));
console.log(power(2, 3));
