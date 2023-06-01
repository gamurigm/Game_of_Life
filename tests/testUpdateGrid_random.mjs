import readline from 'readline';
import { updateGrid } from '../updateGameStatus.mjs';

function randomizeGrid(rows, cols) {
  const grid = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      const randomValue = Math.random() > 0.4 ? 1 : 0;
      row.push(randomValue);
    }
    grid.push(row);
  }
  return grid;
}

function testUpdateGrid() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter the number of rows: ', (rows) => {
    rl.question('Enter the number of columns: ', (cols) => {
      rl.close();

      rows = parseInt(rows);
      cols = parseInt(cols);

      if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
        console.log('Error: Invalid input! Please enter positive integers only!');
        return;
      }

      const originalGrid = randomizeGrid(rows, cols);
      console.log('Original Grid:');
      printGrid(originalGrid);

      const updatedGrid = updateGrid(originalGrid);
      console.log('Updated Grid:');
      printGrid(updatedGrid);
    });
  });
}

function printGrid(grid) {
  for (let row of grid) {
    console.log(row.join(' '));
  }
  console.log('\n');
}

testUpdateGrid();
