function customLength(insputString) {
  let length = 0;
  for (let index = 0; index < insputString.length; index++) {
    length += 1;
  }
  return length;
}

function customLengthRec(inputString, index = 0) {
  if (index === inputString.length) return index;
  return customLengthRec(inputString, index + 1);
}
console.log(customLength("Hello world"));
console.log(customLengthRec("Hello world"));
