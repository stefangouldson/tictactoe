import React from 'react';
import './App.css';

function App() {
  return (
  <div>
    <h1>Tic Tac Toe</h1>

    <table>

      <tr>
      <th>One</th>
      <th>Two</th>
      <th>Three</th>
      </tr>

      <tr>
        <th>Four</th>
        <th>Five</th>
        <th>Six</th>
      </tr>

      <tr>
        <th>Seven</th>
        <th>Eight</th>
        <th>Nine</th>
      </tr>

    </table>

    <div id='button-cont'>
    <button>Play game</button>
    </div>
    
  </div>
  );
}

export default App;
