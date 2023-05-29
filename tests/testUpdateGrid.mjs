import { updateGrid } from '../updateGameStatus.mjs';

function testUpdateGrid() {
  const grid = [
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
  ];

  const updatedGrid = updateGrid(grid);
  console.log('Original Grid:');
 
  printGrid(grid);
  console.log('Updated Grid:');
 
  printGrid(updatedGrid);
}

function printGrid(grid) {
  for (let row of grid) {
    console.log(row.join(' '));
  }
  console.log('\n');
}

testUpdateGrid();
