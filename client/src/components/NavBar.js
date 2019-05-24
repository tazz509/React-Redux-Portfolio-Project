import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (<div style={{background: '#e9e3d4', borderBottom: '2px solid black', paddingTop: '10px', paddingBottom: '10px', marginBottom: '12px', textAlign: 'center'}}>
        <NavLink style={{right : '40px'}} to="/" >
            Home
            <span className="glyphicon glyphicon-home"></span>
        </NavLink>
        <NavLink style={{marginRight : '40px'}} to="/events" >
            Events
            <span className="glyphicon glyphicon glyphicon-sunglasses"></span>
        </NavLink>
        <NavLink style={{marginRight : '40px'}} to="/events/new" >
            Add Event
            <span className="glyphicon glyphicon-plus"></span>
        </NavLink>
        
    </div>
    );
}

export default NavBar;