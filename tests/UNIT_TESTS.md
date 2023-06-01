# Unit-Tests

To run the unit tests follow these steps:

1. Make sure you have Node.js installed on your system.
2. Open a terminal or command prompt.
3. Navigate to the project directory.
4. Run the `Node` command followed by the .js file to be tested.


## 1. Testing `createGrid` function:

In these unit tests, we will be testing the `createGrid` function. The `createGrid` function is responsible for creating the initial grid based on the specified dimensions.
1. Place you at the proyect's test folder: `...\Game_of_Live\tests` 
2. Run at visual code or any terminal: `node createGrid_test.mjs`  
3. test the following:

**a.** Test-case: `columns = 0 and rows = 0`
**result:** 
![a.](https://github.com/gamurigm/Game_of_Life/blob/main/tests/img/1.a-test.PNG)

**b.** Test-case: `colums = 1 and rows = 1`
**result:**
![b.](https://github.com/gamurigm/Game_of_Life/blob/main/tests/img/1.b-test.PNG)

**c.** Test-case: `columns=5 and rows=4`
**result:**
![c.](https://github.com/gamurigm/Game_of_Life/blob/main/tests/img/1.c-test.PNG)

**d.** Test-case: `columns=10 and rows=30`
**result:**
![d.](https://github.com/gamurigm/Game_of_Life/blob/main/tests/img/1.d-test.PNG)

**e.** Test-case: `columns=501 and rows=301`
**result:**
![e.](https://github.com/gamurigm/Game_of_Life/blob/main/tests/img/1.e-test.PNG)

## Use Cases Matrix

| Test ID | Description           | Pre-Condition        | Pass/Fail | Observation  |  
| --------| --------------------- | -------------------- | --------- |--------------|
| a       | cols = 0 & rows = 0   | getCanvasDimension() |   YES     | Do not create |                 
| b       | cols = 1 & rows = 1   | getCanvasDimension() |   YES     | single cell  |             
| c       | cols = 5 & rows = 4   | getCanvasDimension() |   YES     |   5x4 Matrix |                   
| d       | cols = 10 & rows = 30 | getCanvasDimension() |   YES     |  10x30 Matrix |                    
| e       | cols = 501 & rows = 301 | getCanvasDimension() |   YES     | 501x301 Matrix             |         



## 2. Testing randomizeGrid function:
The purpose of testing the randomizeGrid function is to ensure that it generates a random grid with the appropriate life or death states assigned to each cell.
Follow these steps:
1. In the test folder Run on terminal: `node randomizeGrid_test.js`
2.test the following:

**2.a** Test-case: `rows=1 columns=1`
**result:**
![c.](https://github.com/gamurigm/Game_of_Life/blob/main/tests/img/2.a.PNG)

**2.b** Test-case: `rows=5 and columns=4`
**result:**
![2.b](https://github.com/gamurigm/Game_of_Life/blob/main/tests/img/2.b.PNG)

**2.c** Test-case: `rows=7 and columns=36`
**result:**
![2.c](https://github.com/gamurigm/Game_of_Life/blob/main/tests/img/2.c.PNG)


## 3. Testing updateGrid function:
The purpose of testing the `updateGrid()` function is to verify its correctness and ensure that it accurately updates the state of the grid according to the rules of the game.

Test the followig:

### With fixed values:
at current directory run: `node testUpdateGrid_fixed.mjs`

these are the fixed valued for three grids (anyone can manually modify):

![fixedValues](https://github.com/gamurigm/Game_of_Life/blob/main/tests/img/fixedValues.PNG)

**3.1a** Test-case: `fixed grid 1`
**result:**
![3.1a](https://github.com/gamurigm/Game_of_Life/blob/main/tests/img/3.1a.PNG)

**3.1a** Test-case: `fixed grid 2`
**result:**
![3.1a](https://github.com/gamurigm/Game_of_Life/blob/main/tests/img/3.1b.PNG)

**3.1a** Test-case: `fixed grid 3`
**result:**
![3.1a](https://github.com/gamurigm/Game_of_Life/blob/main/tests/img/3.1c.PNG)

### Variation: 
In this case we use (x,y) rows and cols promted by the user and random values.

at current directory run: `node testUpdateGrid_random.mjs`

**3.2a** Test-case: `rows=1 columns=1`
**result:**
![3.2a](https://github.com/gamurigm/Game_of_Life/blob/main/tests/img/3.2a.PNG)

**3.2b** Test-case: `rows=2 and columns=3`
**result:**
![3.2b](https://github.com/gamurigm/Game_of_Life/blob/main/tests/img/3.2b.PNG)

**3.2c** Test-case: `rows=5 and columns=5`
**result:**
![3.2c](https://github.com/gamurigm/Game_of_Life/blob/main/tests/img/3.2c.PNG)

**3.2d** Test-case: `rows=7 and columns=36`
**result:**
![3.2d](https://github.com/gamurigm/Game_of_Life/blob/main/tests/img/3.2d.PNG)



## Use Cases Matrix

| Test ID | Description           | Pre-Condition   | Pass/Fail | Observation   |  
| --------| --------------------- | --------------- | --------- |-------------- |
| 3.1a    | with fixed grid 1   | none              |   YES     | Do not create |               
| 3.1b    | with fixed grid 2   | none              |   YES     | single cell   |            
| 3.1c    | with fixed grid 3   | none              |   YES     |   5x4 Matrix  |                   
| 3.2a    | cols = 1 & rows = 1 | none              |   YES     |  1x1 Matrix   |                   
| 3.2b    | cols = 3 & rows = 2 | none              |   YES     | 2x3 Matrix    |                    
| 3.2c    | cols = 5 & rows = 5 | none              |   YES     | 5x5 Matrix    |                   
| 3.2d    | cols = 36 & rows = 7 | none             |   YES     | 7x36 Matrix   |                  

