export function canvasDimension(){
  let rows, cols;
  
  do {
    rows = parseInt(prompt('Enter the number of rows (positive integer):'));
  } while (isNaN(rows) || rows <= 0 || !Number.isInteger(rows));

  do {
    cols = parseInt(prompt('Enter the number of columns (positive integer):'));
  } while (isNaN(cols) || cols <= 0 || !Number.isInteger(cols));

  const cellSize = 12;
  const canvas = document.getElementById('gameBoard');
  const context = canvas.getContext('2d');
  
  canvas.width = cols * cellSize;
  canvas.height = rows * cellSize;

  return { rows, cols, cellSize, canvas, context };
}

  