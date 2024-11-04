export default () => {
  console.log('*** Valid Anagram *** - Frecuency Counter');

  function validAnagram(str1: string, str2: string) {
    if (str1.length !== str2.length) {
      return false;
    }

    if (!str1.length && !str2.length) {
      return true;
    }

    const srt1Dicc: {[key: string]: number} = {};

    for (const _a of str1) {
      srt1Dicc[_a] = (srt1Dicc[_a] || 1) + 1;
    }

    for (let i = 0; i < str2.length; i++) {
      if (!srt1Dicc[str2[i]]) {
        return false;
      } else {
        srt1Dicc[str2[i]] -= 1;
      }
    }

    return true;
  }

  console.log(validAnagram('ananas', 'sanana'));
};