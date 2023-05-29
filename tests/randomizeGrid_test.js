const readline = require('readline');

function randomizeGrid(grid) {
  const randomizedGrid = grid.map((col) =>
    col.map(() => (Math.random() > 0.4 ? 1 : 0))
  );
  return randomizedGrid;
}

function testRandomizeGrid() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Ingrese el número de filas: ', (rows) => {
    rl.question('Ingrese el número de columnas: ', (cols) => {
      rl.close();

      rows = parseInt(rows);
      cols = parseInt(cols);

      if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
        console.log('Error: Entrada inválida! Ingresar sólo números enteros positivos!');
        return;
      }

      const grid = [];
      for (let i = 0; i < rows; i++) {
        grid.push(Array(cols).fill(0));
      }

      const randomizedGrid = randomizeGrid(grid);

      if (randomizedGrid.length !== rows || randomizedGrid[0].length !== cols) {
        console.log('Error: tamaño incorrecto.');
        return;
      }

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
        console.log('Error: Ningún elemento ha cambiado.');
        return;
      }

      console.log('La función randomizeGrid ha pasado la prueba.');
    });
  });
}
testRandomizeGrid();
