import React from 'react'
import Board from './Board.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { NewGame } from '../api/NewGame.js';
import './game.css';

class Game extends React.Component {
  componentWillMount() {
      this.props.NewGame();
  }
  render() {
    return (
      <div className="game">
        <div id="game-board">
          <Board />
        </div>
        <div id="links">
          <a href="/">Home  </a>
          <a href="/about">About  </a>
          <a href="/scores">Scores</a>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({NewGame: NewGame}, dispatch)
}

function mapStateToProps(state){
  return { board: state.board }
}
export default connect(mapStateToProps, mapDispatchToProps)(Game)
