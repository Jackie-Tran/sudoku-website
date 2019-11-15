import React from 'react';
import Grid from './components/Grid';
import './App.css';

class App extends React.Component {

  state = {
    grid: [
      [5, 3, 0, 0, 7, 0, 0, 0, 0],
      [6, 0, 0, 1, 9, 5, 0, 0, 0],
      [0, 9, 8, 0, 0, 0, 0, 6, 0],
      [8, 0, 0, 0, 6, 0, 0, 0, 3],
      [4, 0, 0, 8, 0, 3, 0, 0, 1],
      [7, 0, 0, 0, 2, 0, 0, 0, 6],
      [0, 6, 0, 0, 0, 0, 2, 8, 0],
      [0, 0, 0, 4, 1, 9, 0, 0, 5],
      [0, 0, 0, 0, 8, 0, 0, 7, 9]
    ]
  }


  onCellChange = (row, col, value) => {
    // Change the grid in state
    const newGrid = this.state.grid;
    newGrid[row][col] = parseInt(value);
    this.setState({ grid: newGrid });
  }

  checkSudoku = (row, col) => {
    // Check the row
    let numbersCheck = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    const { grid } = this.state;
    for (let j = 0; j < 9; j++) {
      if (grid[row][j] !== 0 && numbersCheck[Math.abs(grid[row][j])] === 1) {
        // Already saw this number in this row
        return false;
      } else {
        numbersCheck[grid[row][j]] = 1;
      }
    }

    // Check the col
    numbersCheck = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < 9; i++) {
      if (grid[i][col] !== 0 && numbersCheck[Math.abs(grid[i][col])] === 1) {
        // Already saw this number in this col
        return false;
      } else {
        numbersCheck[grid[i][col]] = 1;
      }
    }

    // Check the box
    numbersCheck = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let startRow = row - row % 3;
    let startCol = col - col % 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (grid[startRow + i][startCol + j] !== 0 && numbersCheck[grid[startRow + i][startCol + j]] === 1) {
          // Already saw this number in this box
          return false;
        } else {
          numbersCheck[grid[startRow + i][startCol + j]] = 1;
        }
      }
    }

    return true;
  }

  isSolved = () => {
    const { grid } = this.state;
    // Check rows
    for (let i = 0; i < 9; i++) {
      let numbersCheck = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      for (let j = 0; j < 9; j++) {
        if (numbersCheck[grid[i][j]] === 1) {
          // We already saw this number
          return false;
        } else {
          numbersCheck[grid[i][j]] = 1;
        }
      }
    }

    // Check cols
    for (let j = 0; j < 9; j++) {
      let numbersCheck = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      for (let i = 0; i < 9; i++) {
        if (numbersCheck[grid[i][j]] === 1) {
          // We already saw this number
          return false;
        } else {
          numbersCheck[grid[i][j]] = 1;
        }
      }
    }

    // Check box
    for (let box = 0; box < 9; box++) {
      let numbersCheck = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      for (let i = 3*(box/3); i < 3*(box/3) + 3; i++) {
        for (let j = 3*(box%3); j < 3*(box%3) + 3; j++) {
          if(numbersCheck[grid[i][j]] === 1) {
            // We already saw this number
            return false;
          } else {
            numbersCheck[grid[i][j]] = 1;
          }
        }
      }
    }
    return true;
  }

  findEmpty = (row, col) => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (this.state.grid[i][j] <= 0) {
          row = i;
          col = j;
          return { row, col }
        }
      }
    }

    row = -1;
    col = -1;
    return { row, col };
  }

  tryValue = (num, row, col) => {
    const newGrid = this.state.grid;
    newGrid[row][col] = num;
    this.setState({ grid: newGrid });
    return this.checkSudoku(row, col);
  }

  solveSudoku = () => {
    console.log(this.state.grid);
    // Numbers we will try putting in place of empties
    let possibleNumbers = [8, 2, 4, 1, 9, 6, 5, 7, 3];
    let row = 0;
    let col = 0;

    // Find empty square we wanmt to fill
    let emptyPosition = this.findEmpty(row, col);
    row = emptyPosition.row;
    col = emptyPosition.col;

    if (row === -1 && col === -1) {
      return;
    }

    // Try all possible values
    for (const num in possibleNumbers) {
      // Check if putting this number is safe
      if (this.tryValue(num, row, col)) {
        this.solveSudoku();
        if (this.isSolved()) {
          return;
        }
      }
    }

    let newGrid = this.state.grid;
    this.setState({ grid: newGrid });

  }

  onClick = (e) => {
    console.log(this.state.grid);
    this.solveSudoku();
    console.log("Solution is: ");
    console.log(this.state.grid);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Sudoku Solver</h1>
          <h4>Backtracking Algorthim</h4>
          <a href="#solver">
            <div className="btn btn-one">
              <span>TRY NOW</span>
            </div>
          </a>

        </header>

        {/* Section Break */}

        <div className="solverContainer" id='solver'>
          <h2>Input data in the grid below.</h2>
          <Grid onCellChange={this.onCellChange} />
          <a onClick={this.onClick}>
            <div className="btn btn-five">
              <span>SOLVE</span>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default App;
