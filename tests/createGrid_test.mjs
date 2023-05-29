import { createGrid } from "../createGrid.mjs";


const cols = 5;
const rows = 3;
const grid = createGrid(cols, rows);

for (let col = 0; col < cols; col++) {
  for (let row = 0; row < rows; row++) {
    console.log(`grid[${col}][${row}] = ${grid[col][row]}`);
  }
}
