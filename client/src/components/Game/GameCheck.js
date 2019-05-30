import React from 'react';
import { connect } from 'react-redux';
import { solutionCheck } from '../../actions.js';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

class GameCheck extends React.Component {
  onClick = () => {
    console.log(this);
    let current = this.props.board.current_board;
    let solution = this.props.board.solution_board;
    let correct = 0;
    for (let i = 0; i < 81; i++) {
      current[i] === solution[i] && correct++
    }
    let remain = 81 - correct
    if (remain === 0) {
      this.props.board.end_time = Date.now();
      this.props.board.solved = true;
      alert("Congratulations, you have solved the puzzle");
      browserHistory.push('/enter_score');
    }
    else
      alert("You have " + remain + " to go")
  }

  render() {
    return(
      <div>
        {console.log(this.props)}
        <input type="button" onClick={ this.onClick } value="Check my progress"/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { board: state.board }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({solutionCheck: solutionCheck}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GameCheck)

//export default GameCheck