function buubleSort(arr) {
  let isSwap;
  do {
    isSwap = false;
    for (let index = 0; index < arr.length; index++) {
      if (arr[index] > arr[index + 1]) {
        /*let temp = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = temp;*/
        [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
        isSwap = true;
      }
    }
  } while (isSwap);
  return arr;
}

let arr = [64, 34, 25, 12, 22, 11, 90];
console.log(buubleSort(arr));
