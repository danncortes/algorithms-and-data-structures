export default () => {
  console.log('*** Factorial ***');

  function factorial(num: number): number {
    return num === 1 ? num : factorial(num - 1) * num;
  }

  console.log('Factorial', factorial(4));
};
