import React from 'react';

const Rules = () =>
  <div>
    <h1>Rules of Sudoku</h1>
    <p>
      The board is presented as a 9x9 grid with several values filled in. The goal is to fill in the missing
      values until the board is complete. The following restrictions apply:
    </p>
    <ul>
      <li>Each row in the grid must contain each value of 1-9 without duplicates</li>
      <li>Each column in the grid must contain each value of 1-9 without duplicates</li>
      <li>There are nine subpuzzles in the grid that must contain values 1-9 without duplicates</li>
    </ul>
  </div>

export default Rules