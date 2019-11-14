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
          <Grid />
          <a>
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
