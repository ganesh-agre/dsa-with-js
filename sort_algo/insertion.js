function insertionSort(arr) {
  for (let index = 1; index < arr.length; index++) {
    const currentValue = arr[index];
    let j = index - 1;
    while (j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentValue;
  }
  return arr;
}

let array = [1, 6, 7, 4, 2, 9];
console.log(insertionSort(array));
