// O(n) time | O(n) space
function twoNumberSum(array, targetSum) {
  // target = x + y; y = target - x;
  const nums = {};
  for (const num of array) {
    const potentialMatch = targetSum - num;
    if (potentialMatch in nums) {
      console.log([num, targetSum - num]);
    } else {
      nums[num] = true;
    }
  }
  return [];
}

/* O(n^2) time | O(1) space
function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length - 1; i++) {
    const firstNum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const secondNum = array[j];
      if (firstNum + secondNum === targetSum) {
        console.log([firstNum, secondNum]);
      } else {
        console.log([]);
      }
    }
  }
} */

/* O(nlog(n)) | O(1) space
function twoNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    const currentSum = array[left] + array[right];
    if (currentSum === targetSum) {
      return console.log([array[left], array[right]]);
    } else if (currentSum < targetSum) {
      left++;
    } else if (currentSum > targetSum) {
      right--;
    }
  }
  return [];
} */

twoNumberSum([11, 12, 14, -12, 1, 45, 65], 23);
