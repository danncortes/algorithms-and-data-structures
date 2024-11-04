export default () => {
  /* We have a first pointing in the first position and a second one moving to the right
  and looking for the smallest element.
  After finding the smallest element we compare it to the first, if this is smaller,
  we swap, otherwise we continue again starting from the second position. */
  
  function selectSort(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
      let min = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) {
          min = j;
        }
      }

      if (min !== i) {
        [arr[i], arr[min]] = [arr[min], arr[i]];
      }
    }

    return arr;
  }

  console.log(
    '*** Selection Sort *** ---> [100, 80, 2, 10, 3, 0, 90]',
    selectSort([100, 80, 2, 10, 3, 0, 90])
  );
};
