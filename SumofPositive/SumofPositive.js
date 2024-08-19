function positiveSum(arr) {
  let sum = 0;
  let neg = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      neg.push(arr[i]);
    } else {
      sum += arr[i];
    }
  }
  return sum;
}
console.log(positiveSum([12, 3, -5]));
