//dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, Image } from 'react-bootstrap';
import Moment from 'react-moment';
//actions
import { deleteEvent } from '../actions'

class EventShow extends Component {

    

    render() {
        const { event, history } = this.props;
        
        return (
            <div className="container-fluid text-center">
                <h1>Name: {event.name}</h1>
                <h1>Location: {event.location}</h1>
                <h1>Date: <Moment format="dddd, MMMM Do">{event.date}</Moment></h1>
                <h1>Time: <Moment format="h:mm a">{event.time}</Moment></h1>
                <h1>Notes: {event.notes}</h1>

                <Image src={event.image} width="30%" height="50%" alt="logo" rounded/> <br></br>


                <ButtonGroup>
                    <Button className="btn btn-outline-danger" onClick={() => this.props.deleteEvent(event.id, history) }>
                        <span className="glyphicon glyphicon-remove-circle"></span> Delete Event
                    </Button>

                    <Button className="btn btn-outline-secondary">
                        <Link key={event.id} to={`/events/${event.id}/edit`}>
                            <span className="glyphicon glyphicon-pencil"></span> Edit Event
                        </Link>
                    </Button>
                </ButtonGroup>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    // debugger

    const id = +ownProps.match.params.showId;
    const event = state.events.events.find(event => event.id === id) || {};
    
    return {
        event: event
    }
}

export default connect(mapStateToProps, {deleteEvent})(EventShow);