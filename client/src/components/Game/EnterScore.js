import React from 'react';
import { connect } from 'react-redux';
import { PostScore } from '../../api/PostScore.js';
import { browserHistory } from 'react-router';
import './enterScore.css';

class EnterScore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({name: event.target.value});
  }
    
  handleSubmit(event) {
    let solution_time = this.props.board.end_time - this.props.board.start_time;
    PostScore(this.state.name, solution_time);
    browserHistory.push('/');
    event.preventDefault();    
  }
  
  render() {
    if (this.props.board.solved) {
      return(
        <div>
          <h2>Please enter your initials</h2>
          <form id="initials" onSubmit={this.handleSubmit}>
            <label id="name">
              Name:
              <input type="text" value={this.state.name} size="3" maxLength="3" onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      )
    }
    else
      return(
        <div>
          { browserHistory.push('/') }
        </div>
      )
  }
}

function mapStateToProps(state) {
  return { board: state.board }
}

export default connect(mapStateToProps)(EnterScore)
