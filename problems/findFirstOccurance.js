function firstOccurance(string, char) {
  let length = string.length - 1;
  for (let index = 0; index <= length; index++) {
    if (string[index] == char) {
      return index;
    }
  }
}

function firstOcuuranceRecursive(string, index, char) {
  if (index === string.length) {
    return -1;
  }

  if (string[index] === char) {
    return index;
  }

  return firstOcuuranceRecursive(string, index + 1, char);
}

console.log(firstOcuuranceRecursive("hello", 0, "o"));
