const checkSudoku = (board) => {
  const isSudokuArrayValid = (array) => {
    const row = [...array].sort().join(""),
      passingRow = [1, 2, 3, 4, 5, 6, 7, 8, 9].join("");

    return row === passingRow;
  };

  const testRows = (board) => board.every((row) => isSudokuArrayValid(row));

  const testColumns = (board) => {
    const gatherColumn = (board, columnNum) =>
      board.reduce((total, row) => [...total, row[columnNum]], []);

    return [0, 1, 2, 3, 4, 5, 6, 7, 8].every((i) =>
      isSudokuArrayValid(gatherColumn(board, i))
    );
  };

  const testSquares = (board) => {
    const getSquareIndexes = (num) => {
      if (num === 1) {
        return [0, 1, 2];
      } else if (num === 2) {
        return [3, 4, 5];
      } else {
        return [6, 7, 8];
      }
    };

    const getSquareValues = (x, y, board) => {
      let values = [],
        rows = getSquareIndexes(x),
        columns = getSquareIndexes(y);

      rows.map((row) => {
        columns.map((column) => {
          values.push(board[row][column]);
        });
      });

      return values;
    };

    const squareSections = [1, 2, 3];
    return squareSections.every((squareX) => {
      return squareSections.every((squareY) =>
        isSudokuArrayValid(getSquareValues(squareX, squareY, board))
      );
    });
  };

  return testRows(board) && testColumns(board) && testSquares(board)
    ? "Finished!"
    : "Try again!";
};

const pass = checkSudoku([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
]);

const fail = checkSudoku([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 0, 3, 4, 9],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9],
]);

console.log(pass);
// 'Finished!'
console.log(fail);
// 'Try again!'
