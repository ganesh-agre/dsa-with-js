function removeTAS(string) {
  let result = "";
  for (let index = 0; index < string.length; index++) {
    if (string[index] !== " " && string[index] !== "\t") {
      result += string[index];
    }
  }
  return result;
}

function removeTASRec(inputString, index = 0) {
  if (index == inputString.length) {
    return "";
  }
  if (inputString[index] !== " " && inputString[index] !== "\t") {
    return inputString[index] + removeTASRec(inputString, index + 1);
  } else {
    return removeTASRec(inputString, index + 1);
  }
}

console.log(removeTAS("Hello World"));
console.log(removeTASRec("Hello World"));
