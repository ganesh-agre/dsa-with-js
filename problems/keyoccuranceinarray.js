function keyOccurance(array, key) {
  let count = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] === key) {
      count++;
    }
  }

  return count;
}

function keyOccuranceRec(array, key) {
  if (array.length === 0) return 0;
  if (array[0] === key) {
    return 1 + keyOccuranceRec(array.slice(1, array.length), key);
  } else {
    return keyOccuranceRec(array.slice(1, array.length), key);
  }
}

console.log(keyOccurance([1, 2, 3, 1, 5, 7, 8, 1, 1], 1));
console.log(keyOccuranceRec([1, 2, 3, 1, 5, 7, 8, 1, 1], 1));
