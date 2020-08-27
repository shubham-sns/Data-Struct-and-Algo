const pascalsTriangle = (rows) => {
  let triangle = [];
  if (rows === 0) return triangle;

  triangle.push([1]);

  for (let i = 1; i < row; i++) {
    let prevRow = triangle[i - 1];
    let currRow = [];
    currRow.push(1);
    for (let j = 1; j < i; j++) {
      currRow.push(prevRow[j - 1] + prevRow[j]);
    }
    currRow.push(1);
    triangle.push(currRow);
  }

  return triangle;
};
console.log(pascalsTriangle(5));
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]
