# Unit-Tests

To run the unit tests follow these steps:

1. Make sure you have Node.js installed on your system.
2. Open a terminal or command prompt.
3. Navigate to the project directory.
4. Run the `Node` command followed by the .js file to be tested.


## 1. Testing `createGrid` function:

In these unit tests, we will be testing the `createGrid` function. The `createGrid` function is responsible for creating the initial grid based on the specified dimensions.
1. Place you at the proyect's test folder: `...\Game_of_Live\tests` 
2. Run at visual code or any terminal: `Node createGrid_test.mjs`  
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
