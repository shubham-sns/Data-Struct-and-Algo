const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  // Split Array in into right and left
  const half = Math.floor(array.length / 2);
  const left = array.slice(0, half);
  const right = array.slice(half);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let output = [];
  let leftIndex = 0,
    righIndex = 0;

  while (leftIndex < left.length && righIndex < right.length) {
    if (left[leftIndex] < right[righIndex]) {
      output.push(left[leftIndex]);
      leftIndex++;
    } else {
      output.push(right[righIndex]);
      righIndex++;
    }
  }

  return output.concat(left.slice(leftIndex)).concat(right.slice(righIndex));
}

const answer = mergeSort(numbers);
console.log(answer);
