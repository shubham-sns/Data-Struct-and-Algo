// O(log(n)) time | O(log(n)) space
// function binarySearch(array, target) {
//   return binarySearchHelper(array, target, 0, array.length - 1);
// }

// function binarySearchHelper(array, target, left, right) {
//   if (left > right) {
//     return -1;
//   }
//   const middle = Math.floor((left + right) / 2);
//   const potentialMatch = array[middle];
//   if (potentialMatch === target) {
//     return middle;
//   } else if (potentialMatch > target) {
//     return binarySearchHelper(array, target, left, middle - 1);
//   } else {
//     return binarySearchHelper(array, target, middle + 1, right);
//   }
// }

// O(log(n)) time | O(1) space
function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (array[middle] === target) {
      return middle;
    } else if (array[middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}

binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 78, 91], 33);
