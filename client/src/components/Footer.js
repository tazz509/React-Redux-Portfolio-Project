import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div style={{textAlign:'center'}}>
      <div>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
        <footer className="blockquote-footer">
          <small className="text-muted">
          © Tazz
          </small>
          <NavLink style={{marginRight : '40px'}} to="/about">
            About
            <span className="glyphicon glyphicon-question-sign"></span>
        </NavLink>
        <NavLink style={{marginRight : '40px'}} to="/contact">
            Contact
            <span className="glyphicon glyphicon-envelope"></span>
        </NavLink>
        </footer>
      </div>
    </div>
  );
}
export default Footer;
