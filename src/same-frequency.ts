export default () => {
  console.log('*** Same Frequency *** - Frecuency Counter');

  function sameFrequency(a: number, b: number) {
    const aStr = `${a}`;
    const bStr = `${b}`;

    if (aStr.length !== bStr.length) {
      return false;
    }

    const aObj: {[key: string]: number} = {};

    for (let i of aStr) {
      aObj[i] = aObj[i] ? aObj[i] + 1 : 1;
    }

    for (let ii of bStr) {
      if (!aObj[ii]) {
        return false;
      } else {
        aObj[ii] = aObj[ii] - 1;
      }
    }

    return true;
  }

  console.log(sameFrequency(123455, 534521));
};
