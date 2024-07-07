function RAD(inputString) {
  if (inputString.length === 1) return inputString;

  if (inputString[0] === inputString[1]) {
    return RAD(inputString.substring(1));
  } else {
    return inputString[0] + RAD(inputString.substring(1));
  }
}

function iterativeRad(inputString) {
  let result = "";
  for (let index = 0; index < inputString.length; index++) {
    if (
      index == inputString.length - 1 ||
      inputString[index] !== inputString[index + 1]
    )
      result += inputString[index];
  }
  return result;
}
console.log(RAD("hello"));
console.log(iterativeRad("hello"));
