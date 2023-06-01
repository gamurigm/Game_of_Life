# Unit-Tests

To run the unit tests follow these steps:

1. Make sure you have Node.js installed on your system.
2. Open a terminal or command prompt.
3. Navigate to the project directory.
4. Run the `Node` command followed by the .js file to be tested.


## 1. Testing `createGrid` function:

In these unit tests, we will be testing the `createGrid` function. The `createGrid` function is responsible for creating the initial grid based on the specified dimensions.
1. Place you at the proyect's test folder 
2. Run at vcode or any terminal: `Node createGrid_test.mjs`  
3. test the following:

**a.** Test-case: `columns = 0 and rows = 0`
**result:** 
![a.](./test/img/1.a-test.png)

**b.** Test-case: `colums = 1 and rows = 1`
**result:**
![b.](./test/img/1.b-test.png)

**c.** Test-case: `columns=5 and rows=4`
**result:**
![c.](./test/img/1.c-test.png)

**d.** Test-case: `columns=10 and rows=30`
**result:**
![d.](./test/img/1.d-test.png)

**e.** Test-case: `columns=501 and rows=301`
**result:**
![e.](./test/img/1.e-test.png)

## Use Cases Matrix

| Test ID | Description           | Pre-Condition        | Pass/Fail | Observation  |  
| --------| --------------------- | -------------------- | --------- |--------------|
| a       | cols = 0 & rows = 0   | getCanvasDimension() |   YES     | Do not create |                 
| b       | cols = 1 & rows = 1   | getCanvasDimension() |   YES     | single cell  |             
| c       | cols = 5 & rows = 4   | getCanvasDimension() |   YES     |   5x4 Matrix |                   
| d       | cols = 10 & rows = 30 | getCanvasDimension() |   YES     |  10x30 Matrix |                    
| e       | cols = 501 & rows = 301 | getCanvasDimension() |   YES     | 501x301 Matrix             |         



## 2. Testing randomizeGrig function:
## 3. Testing updateGrid function:
