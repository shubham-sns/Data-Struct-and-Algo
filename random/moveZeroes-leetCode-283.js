/* Given an array nums, write a function to move all 0's to the end of it
while maintaining the relative order of the non-zero elements. */

const moveZeroes = (nums) => {
  let zCounter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      for (let j = i; j < nums.length - 1; j++) {
        nums[j] = nums[j + 1];
      }
      nums.pop();
      i--;
      zCounter++;
    }
  }
  while (zCounter) {
    nums.push(0);
    zCounter--;
  }
  return nums;
};

console.log(moveZeroes([0, 0, 1])); //[1,3,12,0,0]
