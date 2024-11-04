export default () => {
  function sortArr(arr: number[]): number[] {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        const temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
      }
    }
    if (arr.length === 2) {
      return arr;
    } else {
      // On each iteration we move the highest number to the end of the array
      // We call recursively the function with the array without the last element
      return [...sortArr(arr.slice(0, arr.length - 1)), arr[arr.length - 1]];
    }
  }

  console.log(
    '** Bubble Sort ** ---> [90, 100, 25, 10, 5, 80]',
    sortArr([90, 100, 25, 10, 5, 80])
  );
};
