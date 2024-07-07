function balancePar(array) {
  let stack = [];
  const bracketMap = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (let index = 0; index < array.length; index++) {
    const char = array[index];
    if (bracketMap[char]) {
      stack.push(char);
    } else if (Object.values(bracketMap).includes(char)) {
      if (stack.length === 0 || bracketMap[stack.pop()] !== char) return false;
    }
  }
  return stack.length === 0;
}

function balanceParRec(array, bracketMap, index = 0, stack = []) {
  if (index === array.length) return stack.length === 0;
  const char = array[index];

  if (bracketMap[char]) {
    stack.push(char);
  } else if (Object.values(bracketMap).includes(char)) {
    if (stack.length === 0 || bracketMap[stack.pop()] !== char) {
      return false;
    }
  }
  return balanceParRec(array, bracketMap, index + 1, stack);
}

let array = ["[", "(", "{", "}", ")", "]"];
const bracketMap = {
  "(": ")",
  "[": "]",
  "{": "}",
};

console.log(balancePar("({[]}".split("")));
console.log(balanceParRec(array, bracketMap));
