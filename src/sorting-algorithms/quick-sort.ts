export default () => {
  /* It is about selecting a pivot element in the array.
From that pivot element, select the elements on the right side that are smaller than the pivot.
That element should be swapped with the next value after the pivot that is bigger than the pivot element.
Once all the smaller elements should be moved before the pivot element and the process should be repeated with the elements on the right side, and with the elements on the left side of the pivot */
  function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) {
      return arr;
    }

    let lessThan = 0;

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[0]) {
        lessThan++;
        [arr[lessThan], arr[i]] = [arr[i], arr[lessThan]];
      }
    }

    if (lessThan > 0) {
      const left = arr.slice(1, lessThan + 1);
      const right = arr.slice(lessThan + 1);
      return [...quickSort(left), arr[0], ...quickSort(right)];
    } else {
      return [arr[0], ...quickSort(arr.slice(1))];
    }
  }

  console.log(
    '*** Quick sort *** ---> [49, 20, 2, 15, 10, 3, 0, 30]',
    quickSort([49, 20, 2, 15, 10, 3, 0, 30])
  );
};
