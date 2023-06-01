export function canvasDimention() {
    const rows = parseInt(prompt('Enter the number of rows:'));
    const cols = parseInt(prompt('Enter the number of columns:'));
    const cellSize = 12;
    const canvas = document.getElementById('gameBoard');
    const context = canvas.getContext('2d');
    
    canvas.width = cols * cellSize;
    canvas.height = rows * cellSize;
  
    return { rows, cols, cellSize, canvas, context };
  }
  