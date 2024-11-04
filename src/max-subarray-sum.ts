export default () => {
  console.log('*** maxSubArraySum - Sliding Window ***');

  function maxSubArraySum(arr: number[], num: number) {
    if (num > arr.length) {
      return null;
    }

    let maxSum = 0;
    let tempMaxSum = 0;

    for (let i = 0; i < num; i++) {
      maxSum += arr[i];
    }

    tempMaxSum = maxSum;

    for (let i = num; i < arr.length; i++) {
      tempMaxSum = tempMaxSum - arr[i - num] + arr[i];
      if (tempMaxSum > maxSum) {
        maxSum = tempMaxSum;
      }
    }

    return maxSum;
  }

  console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
};
