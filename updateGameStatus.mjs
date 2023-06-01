import { createGrid } from './createGrid.mjs';

export function updateGrid(grid) {
  const cols = grid.length;
  const rows = grid[0].length;
  const newGrid = createGrid(cols, rows);

  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      const cell = grid[col][row];
      const aliveNeighbors = countLivingNeighbors(grid, col, row);

      if (cell === 1) {
        if (aliveNeighbors < 2 || aliveNeighbors > 3)
          newGrid[col][row] = 0;
        else
          newGrid[col][row] = 1;
      } else {
        if (aliveNeighbors === 3)
          newGrid[col][row] = 1;
      }
    }
  }

  return newGrid;
}

export function countLivingNeighbors(grid, col, row) {
  const cols = grid.length;
  const rows = grid[0].length;
  let count = 0;

  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      const neighborCol = col + i;
      const neighborRow = row + j;

      if (
        neighborCol >= 0 &&
        neighborCol < cols &&
        neighborRow >= 0 &&
        neighborRow < rows
      )
        count += grid[neighborCol][neighborRow];
    }
  }
  count -= grid[col][row];
  return count;
}


