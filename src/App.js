import React from 'react';
import Grid from './components/Grid';
import './App.css';

class App extends React.Component {

  state = {
    grid: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0,],
      [0, 0, 0, 0, 0, 0, 0, 0, 0,],
      [0, 0, 0, 0, 0, 0, 0, 0, 0,],
      [0, 0, 0, 0, 0, 0, 0, 0, 0,],
      [0, 0, 0, 0, 0, 0, 0, 0, 0,],
      [0, 0, 0, 0, 0, 0, 0, 0, 0,],
      [0, 0, 0, 0, 0, 0, 0, 0, 0,],
      [0, 0, 0, 0, 0, 0, 0, 0, 0,],
      [0, 0, 0, 0, 0, 0, 0, 0, 0,]
    ]
  }


  onCellChange = (row, col, value) => {
    // Change the grid in state
    const newGrid = this.state.grid;
    newGrid[row][col] = parseInt(value);
    this.setState({grid: newGrid});
  }

  solveSudoku = () => {
    console.log("Solving Sudoku");
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
          <Grid onCellChange={this.onCellChange}/>
          <a onClick={this.solveSudoku}>
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
