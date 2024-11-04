export default () => {
  function mergeSort(arr: number[]): number[] {
    function mergeArr(p1: number[], p2: number[]) {
      let i = 0;
      let j = 0;

      const finalArr = [];

      while (p1[i] !== undefined || p2[j] !== undefined) {
        if (p2[j] === undefined || p1[i] <= p2[j]) {
          finalArr.push(p1[i]);
          i++;
        } else {
          finalArr.push(p2[j]);
          j++;
        }
      }
      return finalArr;
    }

    if (arr.length <= 1) {
      return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const firstArr = mergeSort(arr.slice(0, mid));
    const secondArr = mergeSort(arr.slice(mid));

    return mergeArr(firstArr, secondArr);
  }
  console.log(
    '*** merge sort *** ---> [100, 80, 2, 10, 3, 0, 90]',
    mergeSort([100, 80, 2, 10, 3, 0, 90])
  );
};
