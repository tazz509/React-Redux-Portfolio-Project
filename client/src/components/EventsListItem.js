//dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class EventsListItem extends Component {

  render() {
    return(
      <div style={{marginTop: '30px'}}>
        <div className="container-fluid text-center">
          <h3>
            <Link key={this.props.event.id} to={`/events/${this.props.event.id}`}>{this.props.event.name}</Link> (Edit/Delete)
          </h3>
        </div>
      
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  
  return {
    events: state.events
  }
 }
export default connect(mapStateToProps, null)(EventsListItem);