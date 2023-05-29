export function randomizeGrid(grid) {
    const randomizedGrid = grid.map((col) =>
      col.map(() => (Math.random() > 0.4 ? 1 : 0))
    );
    return randomizedGrid;
  }
  