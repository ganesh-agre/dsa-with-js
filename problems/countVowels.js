function isVowel(char) {
  let lowerChar = char.toLowerCase();
  let vowels = "aeiou";
  return vowels.indexOf(lowerChar) != -1 ? true : false;
}

function countVowelsRecursively(string, strLength) {
  if (strLength == 1) {
    return Number(isVowel(string[0]));
  }

  /*if (isVowel(string[strLength - 1])) {
    return 1 + countVowelsRecursively(string, strLength - 1);
  } else {
    return countVowelsRecursively(string, strLength - 1);
  }*/
  return (
    countVowelsRecursively(string, strLength - 1) +
    Number(isVowel(string[strLength - 1]))
  );
}

function countVowels(string) {
  let strLength = string.length - 1;
  let count = 0;
  for (const i = 0; i <= strLength; i++) {
    if (isVowel(string[i])) {
      count += 1;
    }
  }
}

console.log(countVowelsRecursively("hello", 5));
console.log(countVowelsRecursively("aillo", 5));
