import { canvasDimention } from "./canvasDim.js";
import { createGrid } from "./createGrid.mjs";
import { randomizeGrid } from "./ramdomGrid.js";
import { updateGrid } from "./updateGameStatus.mjs";
import { renderGrid } from "./gridRenderer.js";
const {cols, rows, cellSize, canvas, context} = canvasDimention();
export function initialize(){
    let grid = createGrid(cols, rows);
    grid = randomizeGrid(grid);
    
    setInterval(updateGame, 500 / 5);
    function updateGame(){
        grid = updateGrid(grid);
        renderGrid(grid, cols, rows, cellSize, canvas, context);
    }
}