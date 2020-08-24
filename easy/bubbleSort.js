// Best: O(n) time | O(1) space
// Average: O(n^2) time | O(1) space
// Worst: O(n^2) time | O(1) space
function bubbleSort(array) {
  let isSorted = false;
  let counter = 0;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length - 1 - counter; i++) {
      if (array[i] > array[i + 1]) {
        swap(i, i + 1, array);
        isSorted = false;
      }
    }
    counter++;
  }
  return array;
}
function swap(i, j, array) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

// console.log(bubbleSort([12, 34, 56, 78, 90, 11, 22, 33, 44]));
