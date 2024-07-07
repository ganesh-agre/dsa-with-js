function balancePar(array) {
  let counter = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] === "(") {
      counter++;
    } else if (array[index] === ")") {
      counter--;
    }
  }
  return counter == 0;
}

function balanceParRec(array, index = 0, count = 0) {
  if (index === array.length) {
    return count === 0;
  }
  if (count < 0) return false;

  if (array[index] === "(") {
    return balanceParRec(array, index + 1, count + 1);
  } else if (array[index] === ")") {
    return balanceParRec(array, index + 1, count - 1);
  }
}

console.log(balancePar(["(", "(", ")", "(", ")", ")"]));
console.log(balanceParRec(["(", "(", ")", "(", ")", ")"]));
