export default () => {
  console.log('*** Find Number Index - Binary Search ***');

  function binarySearch(arr: number[], num: number) {
    if (num > arr[arr.length-1]) {
      return null;
    }

    function findIdx(num: number, startNum: number, endNum: number, arr: number[]) {
      if (arr[startNum] === num) {
        return startNum;
      } else if (arr[endNum] === num) {
        return endNum;
      } else {
        const middle = Math.floor((endNum - startNum) / 2) + startNum;

        if (arr[middle] === num) {
          return middle;
        } else if (num < middle + 1) {
          return findIdx(num, startNum, middle, arr);
        } else {
          return findIdx(num, middle + 1, endNum, arr);
        }
      }
    }

    return findIdx(num, 0, arr.length - 1, arr);
  }

  console.log(
    'index',
    binarySearch(
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      12
    )
  );
};
