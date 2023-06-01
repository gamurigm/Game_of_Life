# Game_of_Life
Conway's Game of life's Algorithm 

# About 
This game operates on a grid of cells, each of which can be in one of two states: alive or dead. 
The rules determine the state of each cell in the next generation based on its current state and the state of its neighboring cells. 
These simple rules give rise to complex patterns and behaviors in the evolving generations of the game.

## Table of Contents
1. [**Game Rules**](#game-rules)
2. [**Requirements**](#requirements)
3. [**Installation Instructions**](#installation-instructions)
4. [**Project Structure**](#project-structure)
5. [**How It Works**](#how-it-works)
6. [**Configuration**](#configuration)
7. [**Compilation Instructions**](#compilation-instructions)
8. [**Execution Instructions**](#execution-instructions)
9. [**Examples and Use Cases**](#examples-and-use-cases)


# Game Rules <a name="game-rules"></a>
The rules of Conway's Game of Life are as follows:

1. Any live cell with two or three live neighbors survives.
2. Any dead cell with three live neighbors becomes a live cell.
3. All other live cells die in the next generation. Similarly, all other dead cells stay dead.

# Requirements <a name="requirements"></a>
For this project you must have installed: 
Node.js
npm

# Installation Instructions <a name="installation-instructions"></a>
To install Node.js on Windows using the Command Prompt (CMD), you can follow these steps:

1. Visit the official Node.js website: https://nodejs.org
2. On the homepage, click on the "Downloads" button.
You will be redirected to the downloads page. Look for the LTS (Long-Term Support) version, which is recommended for most users, and click on the corresponding "Windows Installer" link. This will download the Node.js installer for Windows.
3. Once the installer is downloaded, locate the file and double-click on it to run it.
The Node.js Setup Wizard will open. Follow the instructions in the wizard to proceed with the installation.
4.Open the Command Prompt (CMD) by pressing Win + R, typing "cmd", and hitting Enter.
To verify that Node.js is installed correctly, type the following command in the Command Prompt:

`$ node --version`
`$ npm --version`

Node.js is now installed and ready to use in the Command Prompt (CMD) on your Windows system.

# Project Structure <a name="project-structure"></a>
## Project Structure

The project consists of several files organized into modules to handle different aspects of the Conway's Game of Life. Here is an overview of the files and their functionalities:

- **startGame.js**: This is the entry point of the application. It imports the `game` object from the `game.js` module and initializes the game by calling its `initialize()` method.

- **game.js**: This module defines the `game` object, which contains properties and methods related to the game. It has properties like `updateCount` and `grid` to keep track of the game state. The methods include `initialize()`, `updateGame()`, `updateInterval()`, and `getUpdateCount()`. These methods handle the initialization of the game, updating the game state, and managing the update interval.

- **updateGameStatus.js**: This module provides functions for updating the game state. The `updateGrid()` function takes a grid as input and applies the rules of the game to generate a new grid. It utilizes the `countLivingNeighbors()` function to determine the number of living neighbors for each cell.

- **createGrid.mjs**: This module is responsible for creating the initial grid based on the specified dimensions. It exports the `createGrid()` function.

- **randomizeGrid.js**: This module generates a random grid by assigning the life or death state to each cell. It is not directly used in the provided code but could be used to initialize the grid with a random configuration.

- **gridRenderer.js**: This module handles the rendering of the grid on the canvas using 2D drawing techniques. It exports the `renderGrid()` function.

## Dependency Relationships

- `startGame.js` depends on `game.js` to initialize and run the game.
- `game.js` depends on other modules such as `createGrid.mjs`, `updateGameStatus.js`, and `gridRenderer.js` to perform its functionality.
- `updateGameStatus.js` depends on `createGrid.mjs` to create a new grid.
- `gridRenderer.js` depends on external factors like the canvas and its context to render the grid.



# How It Works <a name="how-it-works"></a>
## App's Flow:

The flow of the application is as follows:

1. The `startGame.js` file imports the game object from the `game.js` file.
2. The `initialize()` method of the game object is executed.
3. The `initialize()` method creates the grid, generates an initial random configuration, and sets the update interval.
4. An update loop is initiated using `setInterval`, where the `updateGame()` method of the game object is called in each iteration.
5. The `updateGame()` method updates the game state by applying the rules, renders the grid, and increases the update counter.
6. The update loop continues at regular intervals until it is stopped by user.



# Configuration <a name="configuration"></a>

## Game Configuration

The configuration of the game includes the velocity and countUpdate parameters. Let's explore each of them in detail:

## Velocity
The velocity refers to the speed at which the game updates and renders each generation of the grid. In the given code, the velocity is indirectly controlled through the `updateInterval(interval)` method in the game object.

The `updateInterval(interval)` method sets an interval for updating the game state and rendering the grid. By default, it is set to 100 milliseconds, meaning that the game updates and renders the grid every 100 milliseconds, creating a new generation.

To adjust the velocity or speed of the game, you can modify the `interval` parameter value passed to the `updateInterval()` method. A smaller value will result in a faster game, while a larger value will slow it down.

## countUpdate
The `countUpdate` property in the game object represents the number of updates that have been performed in the game. It is incremented each time the game state is updated and a new generation is rendered.

The game object provides the `getUpdateCount()` method to retrieve the current value of `countUpdate`. 


# Compilation Instructions <a name="compilation-instructions"></a>
## Compiling the Game of Life Project

To compile and run the Game of Life project, follow these steps:

1. Open the "Game_of_Life" folder using Visual Studio Code.
2. Go to the Extensions section of Visual Studio Code, search for "Live Server," and install it.

![Install Live Server](https://github.com/gamurigm/Game_of_Life/blob/main/docs/img/live-server.PNG)


4. Start the server by clicking the "Go Live" button located in the bottom-right corner of Visual Studio Code.

![Install Live Server](https://github.com/gamurigm/Game_of_Life/blob/main/docs/img/goLive.PNG)

6. The server will start on a local port and open in your default browser.
7. Enter the required data prompted by the program to start the game.

That's it! You should now be able to access and interact with the Game of Life project in your browser. Enjoy!

# Examples and Use Cases <a name="examples-and-use-cases"></a>
