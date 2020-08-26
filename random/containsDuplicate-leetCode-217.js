const containsDuplicate = (nums) => {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in hash) {
      return true;
    } else {
      hash[nums[i]] = 1;
    }
  }

  return false;
};

/* const containsDuplicate = (nums) => {
  nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
}; */

console.log(containsDuplicate([1, 2, 90, 1])); // true
