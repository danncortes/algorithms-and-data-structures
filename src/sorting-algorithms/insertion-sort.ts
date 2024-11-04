export default () => {
  // It goes through the array a takes every element and move it to the position where it should go
  function insertionSort(arr: number[]) {
    for (let i = 1; i < arr.length; i++) {
      const currentVal = arr[i];
      for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
        arr[j + 1] = arr[j];
      }
      arr[j + 1] = currentVal;
    }
    return arr;
  }

  console.log(
    '*** insertion sort *** ---> [100, 80, 2, 10, 3, 0, 90]',
    insertionSort([100, 80, 2, 10, 3, 0, 90])
  );
};
