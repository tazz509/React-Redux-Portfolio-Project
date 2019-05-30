import React from 'react';
import './home.css';
import { Link } from 'react-router';

const Home = () => {
  return(
    <div>
      <h1 id="press">Click Play to get started or about to learn more about Sudoku.</h1>
      <div id="link">
        <Link to="/about">About</Link>
        <Link to="/game">Play</Link>
        <Link to="/scores">High Scores</Link>
      </div>
    </div>
  )
}

export default Home