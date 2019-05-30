import React from 'react'
import { connect } from 'react-redux';
import RenderSquares from '../components/Game/RenderSquares.js';
import GameCheck from '../components/Game/GameCheck.js';

class Board extends React.Component {
  render() {
    return (
      <div>
        <RenderSquares />
        <GameCheck />
      </div>
    );
  }
}

function mapStateToProps(state){
  return { board: state.board }
}

export default connect(mapStateToProps)(Board)
