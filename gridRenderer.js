

export function renderGrid(grid, cols, rows, cellSize, canvas, context){
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (let col = 0; col < cols; col++){
        for(let row = 0; row < rows; row++){
            const cell = grid[col][row];

            if(cell === 1){
                context.fillStyle = 'blue';
                context.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
            }
        }
    }
}