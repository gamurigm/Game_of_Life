import { canvasDimension } from "./canvasDim.js";
import { createGrid } from "./createGrid.mjs";
import { randomizeGrid } from "./ramdomGrid.js";
import { updateGrid } from "./updateGameStatus.mjs";
import { renderGrid } from "./gridRenderer.js";

const { cols, rows, cellSize, canvas, context } = canvasDimension();

const game = {
  updateCount: 0,
  grid: null,
  
  initialize() {
    this.grid = createGrid(cols, rows);
    this.grid = randomizeGrid(this.grid);
    this.updateInterval(100)
    
    setInterval(() => {
      this.updateGame();
    }, 100);
  },
  
  updateGame(){
    this.grid = updateGrid(this.grid);
    renderGrid(this.grid, cols, rows, cellSize, canvas, context);
    this.updateCount++;
  },

  updateInterval(interval) {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.updateGame();
    }, interval);
  },
  
  getUpdateCount() {
    console.log(this.updateCount)
    return this.updateCount;
  }
};

export default game;