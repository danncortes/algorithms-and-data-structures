export default () => {
  console.log('*** Count unique values - Multiple Pointers ***');

  function countUniqueValues(arr: number[]) {
    if (arr.length) {
      let a = 0;
      for (let b = 1; b < arr.length; b++) {
        if (arr[a] !== arr[b]) {
          // Override the next element in the array with the new different one
          // On the next iteration we compare the rest with the new different one
          arr[++a] = arr[b];
          console.log(arr);
        }
      }
      return a + 1;
    }
    return 0;
  }

  console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
};
