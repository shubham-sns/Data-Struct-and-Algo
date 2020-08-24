const generate = (row) => {
  if (+row === 0) {
    return [];
  } else if (+row === 1) {
    return [1];
  }

  let triagle = [[1]];

  for (let i = 1; i < row; i++) {
    let row = [1];
    for (let j = 1; j <= i; j++) {
      row.push([triagle[i - 1]][j - 1] + triagle[i - 1][j]);
    }
    // row.push(1);
    // triagle.push(row);
  }

  return triagle;
};
console.log(generate(5));
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]
