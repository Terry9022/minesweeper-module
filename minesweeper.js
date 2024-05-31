class Minesweeper {
  constructor() {
    this.board = [];
    this.numMines = null;
  }

  generateBoard(numRows, numCols, numMines) {
    this.board = [];
    for (let i = 0; i < numRows; i++) {
      this.board.push(new Array(numCols).fill("□"));
    }
    if (numMines === null || numMines < 0) {
      throw new Error("Number of mines must be a positive integer");
    }
    if (numMines > numRows * numCols) {
      throw new Error("Number of mines cannot be greater than the board size");
    }
    this.numMines = numMines;
    return this.board;
  }

  placeMines(firstClickRow, firstClickCol) {
    if (this.numMines === null) {
      throw new Error("Number of mines not set");
    }
    if (firstClickRow < 0 || firstClickRow >= this.board.length) {
      throw new Error("Invalid first clicked cell position");
    }
    if (firstClickCol < 0 || firstClickCol >= this.board[0].length) {
      throw new Error("Invalid first clicked cell position");
    }
    const numRows = this.board.length;
    const numCols = this.board[0].length;
    const numMines = this.numMines;
    let minesToPlace = numMines;
    const minePositions = [];

    while (minesToPlace > 0) {
      const row = Math.floor(Math.random() * numRows);
      const col = Math.floor(Math.random() * numCols);
      if (
        this.board[row][col] !== "M" &&
        (row !== firstClickRow || col !== firstClickCol)
      ) {
        this.board[row][col] = "M";
        minePositions.push([row, col]);
        minesToPlace--;
      }
    }

    this.setHintNumbers();
    return minePositions;
  }

  setHintNumbers() {
    const numRows = this.board.length;
    const numCols = this.board[0].length;

    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        if (this.board[row][col] !== "M") {
          const numAdjacentMines = this.countAdjacentMines(row, col);
          if (numAdjacentMines > 0) {
            this.board[row][col] = numAdjacentMines.toString();
          }
        }
      }
    }
  }

  countAdjacentMines(row, col) {
    const adjacentPositions = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];

    let count = 0;
    for (const [rowOffset, colOffset] of adjacentPositions) {
      const newRow = row + rowOffset;
      const newCol = col + colOffset;
      if (
        this.isValidPosition(newRow, newCol) &&
        this.board[newRow][newCol] === "M"
      ) {
        count++;
      }
    }
    return count;
  }

  isValidPosition(row, col) {
    const numRows = this.board.length;
    const numCols = this.board[0].length;
    return row >= 0 && row < numRows && col >= 0 && col < numCols;
  }
}

module.exports = Minesweeper;
