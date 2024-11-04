export default () => {
  console.log('*** same *** - Frecuency Counter');

  function same(a: number[], b: number[]) {
    if (a.length !== b.length) {
      return false;
    }

    const first: {[key: string]: number} = {};

    for (let _a of a) {
      first[_a] = (first[_a] || 0) + 1;
    }
    const second: {[key: string]: number} = {};
    for (let _b of b) {
      second[_b] = (second[_b] || 0) + 1;
    }

    for (let i in first) {
      if (!(Number(i) ** 2 in second) || first[i] !== second[Number(i) ** 2]) {
        return false;
      }
    }

    return true;
  }

  console.log(same([1, 2, 3, 2], [1, 9, 4, 4]));
};
