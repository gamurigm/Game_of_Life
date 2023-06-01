const readline = require('readline');

function randomizeGrid(grid) {
  const randomizedGrid = grid.map((col) =>
    col.map(() => (Math.random() > 0.4 ? 1 : 0))
  );
  return randomizedGrid;
}

function printGrid(grid) {
  for (let i = 0; i < grid.length; i++) {
    console.log(grid[i].join(' '));
  }
}

function testRandomizeGrid() {
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

      const grid = [];
      for (let i = 0; i < rows; i++) {
        grid.push(Array(cols).fill(0));
      }

      const randomizedGrid = randomizeGrid(grid);

      if (randomizedGrid.length !== rows || randomizedGrid[0].length !== cols) {
        console.log('Error: Incorrect size.');
        return;
      }

      console.log('Old Grid:');
      printGrid(grid);

      console.log('New Grid:');
      printGrid(randomizedGrid);

      let hasChanged = false;
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          if (randomizedGrid[i][j] !== grid[i][j]) {
            hasChanged = true;
            break;
          }
        }
        if (hasChanged) {
          break;
        }
      }

      if (!hasChanged) {
        console.log('Error: No element has changed.');
        return;
      }

      console.log('The randomizeGrid function has passed the test.');
    });
  });
}

testRandomizeGrid();