function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let leftPointer = 0;
  let rightPointer = 0;
  while (leftPointer < left.length && rightPointer < right.length) {
    if (left[leftPointer] < right[rightPointer]) {
      result.push(left[leftPointer]);
      leftPointer++;
    } else {
      result.push(right[rightPointer]);
      rightPointer++;
    }
  }
  return result
    .concat(left.slice(leftPointer))
    .concat(right.slice(rightPointer));
}

let array = [1, 6, 7, 4, 2, 9];
console.log(mergeSort(array));
