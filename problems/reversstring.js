function reverseString(string) {
  let reversedString = "";
  for (let index = string.length - 1; index >= 0; index--) {
    reversedString += string[index];
  }
  return reversedString;
}

function reversedStringRecursively(string) {
  if (string === "") return "";
  return (
    string[string.length - 1] +
    reversedStringRecursively(string.substring(0, string.length - 1))
  );
}

console.log(reverseString("hello"));
console.log(reversedStringRecursively("hello"));
