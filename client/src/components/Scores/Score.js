import React, {Component} from 'react'

let likes = 0;;

class Score extends Component {
  constructor() {
    super();
    this.state = { likes: 0 };
  }
  
  increment = () => {
    this.setState({
      likes: this.state.likes + 1,
    })
  }
  
  render(){
    //console.log(this);
    return (<span>{this.props.name} - {Math.floor(this.props.time/60000)} minutes,
    {Math.round(this.props.time/60000%60)} seconds  {this.state.likes}
    <input type="button" id="score" value="Like" onClick={ this.increment } /></span>)
  }
}

export default Score