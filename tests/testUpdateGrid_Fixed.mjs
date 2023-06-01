import { updateGrid } from '../updateGameStatus.mjs';

function testUpdateGrid() {
  
  let fixedGrid1 = [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 0]
  ];

  let fixedGrid2 = [
    [1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0],
    [1, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1]
  ];

  let fixedGrid3 = [
    [1, 0, 1, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 0],
    [1, 1, 0, 0, 1, 0, 0]
  
  ];
  console.log('Fixed Grid 1:');
  printGrid(fixedGrid1);

  console.log('Fixed Grid 2:');
  printGrid(fixedGrid2);

  console.log('Fixed Grid 3:');
  printGrid(fixedGrid3);

  //fixed grid 1
  for (let i = 0; i < fixedGrid1.length+1; i++) { // Cambia el número de iteraciones según tus necesidades
    fixedGrid1 = updateGrid(fixedGrid1);
    console.log(`Updated Grid 1 (Iteration ${i + 1}):`);
    printGrid(fixedGrid1);
  }

  //fixed grid 2
  for (let i = 0; i < fixedGrid2.length; i++) { 
    fixedGrid2 = updateGrid(fixedGrid2);
    console.log(`Updated Grid 2 (Iteration ${i + 1}):`);
    printGrid(fixedGrid2);
  }

  //fixed grid 3
  for(let i = 0; i < 25; i++){ 
    fixedGrid3 = updateGrid(fixedGrid3);
    console.log(`Updated Grid 3 (Iteration ${i + 1}):`);
    printGrid(fixedGrid3);
  }


  function printGrid(grid){
    for (let row of grid){
      console.log(row.join(' '));
    }
    console.log('\n');
  }
}

testUpdateGrid();
