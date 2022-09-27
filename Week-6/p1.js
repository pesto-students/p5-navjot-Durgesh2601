//Max Sum Contiguous Subarray
// The first and the only argument contains an integer array, A. Output Format: Return aninteger representing the maximum possible sum of the contiguous subarray.Constraints: 1 <= N <= 1e6 -1000 <= A[i] <= 1000 For example
//Input 2: A = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
//Output 2: 6Explanation 2: The subarray [4,-1,2,1] has the maximum possible sum of 6
// 1, 2, 3, 4, -10
const maxSumSubArr = (arr) => {
  let current_sum = 0;
  let max_sum = -Infinity;
  for (let element of arr) {
    if (current_sum + element > element) {
      current_sum += element;
    } else {
      current_sum = element;
    }
    if (current_sum > max_sum) {
      max_sum = current_sum;
    }
  }
  return max_sum;
};

console.log(maxSumSubArr([-5, 5, -1, 8, -10]));
console.log(maxSumSubArr([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
