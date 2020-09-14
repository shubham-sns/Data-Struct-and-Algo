const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// O(nlog(n)) time | O(log(n)) space
function quickSort(array) {
  quickSortHelper(array, 0, array.length - 1);
}

function quickSortHelper(array, startIdx, endIdx) {
  if (startIdx >= endIdx) {
    return;
  }

  let pivotIdx = startIdx;
  let leftIdx = startIdx + 1;
  let rightIdx = endIdx;

  while (rightIdx >= leftIdx) {
    if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
      swap(leftIdx, rightIdx, array);
    }
    if (array[leftIdx] < array[pivotIdx]) {
      leftIdx++;
    }
    if (array[rightIdx] >= array[pivotIdx]) {
      rightIdx--;
    }
  }
  swap(pivotIdx, rightIdx, array);

  let leftSubarrayIsSmaller = rightIdx - 1 - startIdx < endIdx - (rightIdx + 1);

  if (leftSubarrayIsSmaller) {
    quickSortHelper(array, startIdx, rightIdx - 1);
    quickSortHelper(array, rightIdx + 1, endIdx);
  } else {
    quickSortHelper(array, rightIdx + 1, endIdx);
    quickSortHelper(array, startIdx, rightIdx - 1);
  }
}

function swap(i, j, array) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);
