export function createGrid(cols, rows) {
  const grid = [];
  for (let col = 0; col < cols; col++) {
    grid[col] = [];
    for (let row = 0; row < rows; row++) {
      grid[col][row] = 0;
    }
  }
  return grid;
}
