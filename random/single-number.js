// Given a non-empty array of integers, every element
//  appears twice except for one. Find that single one.

// simple approch
const singalNumber = (arr) => {
  let hash = {};
  arr.map((item) => {
    if (item in hash) {
      hash[item] += 1;
    } else {
      hash[item] = 1;
    }
  });
  console.log(hash);

  for (item in hash) {
    if (item && hash[item] === 1) return item;
  }
};

console.log(singalNumber([2, 2, 1])); // 1
console.log(singalNumber([4, 1, 2, 1, 2])); // 4
