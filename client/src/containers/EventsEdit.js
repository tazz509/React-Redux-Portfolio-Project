import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editEvent } from '../actions';
import { Button } from 'react-bootstrap';

class EventsEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.event.id,
      name: props.event.name,
      location: props.event.location,
      date: props.event.date,
      time: props.event.time,
      notes: props.event.notes
    }
  }

handleOnChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
}

handleOnSubmit = e => {
  e.preventDefault();
  const { editEvent, history } = this.props;
  editEvent(this.state, history);
}

render() {

  return(

    <div className="container-fluid text-center">
      <form style={{marginTop: '16px'}} onSubmit={this.handleOnSubmit}>
        <label>
          Name: <br></br>
            <input 
              className="form-control"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleOnChange}
            />
        </label><br></br>
        <label>
          Location: <br></br>
            <input 
              className="form-control"
              type="text"
              name="location"
              value={this.state.location}
              onChange={this.handleOnChange}
            />
        </label><br></br>
        <label>
          Date: <br></br>
            <input 
              className="form-control"
              type="date"
              name="date"
              value={this.state.date}
              onChange={this.handleOnChange}
            />
        </label><br></br>
        <label>
          Time: <br></br>
            <input 
              className="form-control"
              type="time"
              name="time"
              value={this.state.time}
              onChange={this.handleOnChange}
            />
        </label><br></br>
        <label>
          Notes: <br></br>
            <input 
              className="form-control"
              type="text"
              name="notes"
              value={this.state.notes}
              onChange={this.handleOnChange}
            />
        </label><br></br>

        <Button className="btn btn-outline-primary" type="submit">
          <span className="glyphicon glyphicon-ok"></span> Update Event 
        </Button>
      </form>
    
    </div>
  )
}
}

const mapStateToProps = (state, ownProps) => {
  
  let id = parseInt(ownProps.match.params.showId, 10)
  let event = state.events.events.find(event => event.id === id)
  return { event: event}
}

export default connect(mapStateToProps, {editEvent})(EventsEdit)