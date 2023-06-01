import { createGrid } from "../createGrid.mjs";
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the number of cols: ", (cols) => {
  rl.question("Enter the number of rows: ", (rows) => {
    rl.close();
    const grid = createGrid(parseInt(cols), parseInt(rows));

    for (let col = 0; col < cols; col++) {
      for (let row = 0; row < rows; row++) {
        console.log(`grid[${col}][${row}] = ${grid[col][row]}`);
      }
    }
  });
});
