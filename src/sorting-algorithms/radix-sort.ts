export default () => {
  function radixSortArr(arr: number[], indexNumber: number, radArray: number[][]) {
    for (let num of arr) {
      const strNum = `${num}`;
      const digit = strNum[strNum.length - 1 - indexNumber];
      if (digit) {
        radArray[Number(digit)].push(num);
      } else {
        radArray[0].push(num);
      }
    }

    return radArray;
  }

  function radSort(radArr: number[][] , index: number, oriArr: number[]) {
    let newRadArr = [[], [], [], [], [], [], [], [], [], []];

    if (radArr[0].length === oriArr.length) {
      return radArr[0];
    }

    for (let i = 0; i < radArr.length; i++) {
      radixSortArr(radArr[i], index, newRadArr);
    }

    return radSort(newRadArr, index + 1, oriArr);
  }

  function radixSort(oriArr: number[]) {
    const firstRadArray = radixSortArr(oriArr, 0, [
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
    ]);

    return radSort(firstRadArray, 1, oriArr);
  }

  console.log(
    '*** Radix sort *** ---> [100, 80, 2, 10, 3, 0, 90]',
    radixSort([100, 80, 2, 10, 3, 0, 90])
  );
};
