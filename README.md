# Minesweeper Module

This module provides functionality for generating a Minesweeper game board and placing mines on the board.

## Installation

1. Make sure you have Node.js installed on your system.

2. Clone or download this repository to your local machine.

3. Open a terminal and navigate to the project folder.

## Usage

1. Open the `index.js` file in your preferred code editor.

2. Modify the `numRows`, `numCols`, and `numMines` variables to set the desired board dimensions and number of mines.

3. Adjust the `firstClickRow` and `firstClickCol` variables to specify the position of the first clicked cell.

4. Save the changes.

5. In the terminal, run the following command to execute the code:`node index.js`

6. The initial board, generated board with mines and hint numbers, and mine positions will be printed in the console.

## Customization

You can customize the behavior of the Minesweeper module by modifying the `minesweeper.js` file. The module provides the following methods:

- `generateBoard(numRows, numCols, numMines)`: Generates an empty Minesweeper board with the specified dimensions and number of mines.
- `placeMines(firstClickRow, firstClickCol)`: Places mines randomly on the board, excluding the first clicked cell, and returns the mine positions.

Helper methods:

- `setHintNumbers()`: Calculates and sets the hint numbers for each non-mine cell based on the number of adjacent mines.
- `countAdjacentMines(row, col)`: Counts the number of mines in the adjacent cells of a given cell position.
- `isValidPosition(row, col)`: Checks if a given cell position is within the bounds of the board.

Feel free to explore and modify these methods to enhance the functionality of the Minesweeper module.
