const Minesweeper = require("./minesweeper");

// Create a new instance of the Minesweeper class
const minesweeper = new Minesweeper();

// Generate the initial board with the desired dimensions and number of mines
const numRows = 10;
const numCols = 10;
const numMines = 10;
const board = minesweeper.generateBoard(numRows, numCols, numMines);
console.log("Initial Board:");
for (const row of board) {
  console.log(row.join(" "));
}

// Place mines based on the first clicked cell position
const firstClickRow = 5;
const firstClickCol = 5;
const minePositions = minesweeper.placeMines(firstClickRow, firstClickCol);

// Print the generated board with mines and hint numbers
console.log("\n");
console.log("Generated Minesweeper Board:");
for (const row of board) {
  console.log(row.join(" "));
}

// Print the mine positions
console.log("\n");
console.log("Mine Positions:");
console.log(minePositions);

// Test special cases
// const minesweeper2 = new Minesweeper();
// minesweeper2.placeMines(5, 5);
// Throw an error if the number of mines is not set
// minesweeper2.generateBoard(5,5,2)
// Throw an error if the first clicked cell position is invalid
// minesweeper2.placeMines(-1, 5);
// minesweeper2.placeMines(10, 10);
