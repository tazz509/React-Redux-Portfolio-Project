import React from 'react';
import History from '../components/About/History.js'
import Rules from '../components/About/Rules.js'
import './about.css';
import { Link } from 'react-router';

class About extends React.Component {
  render() {
    return(
      <div className="page">
        <History />
        <Rules />
        <div id="lin">
          <Link to="/">Home</Link>
          <Link to="/game">Play</Link>
          <Link to="/scores">High Scores</Link>
        </div>
      </div>
    )
  }
}

export default About