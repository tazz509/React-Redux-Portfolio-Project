// dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import Footer from './Footer'
//css
import './App.css';
// components
import NavBar from './NavBar';
import Home from './Home';
import About from './about';
import Contact from './contact'
//containers
import EventsPage from '../containers/EventsPage';
//actions
import {getEvents} from '../actions/index'

class App extends Component {

  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/events" component={EventsPage}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/contact' component={Contact}/>
          </Switch>
        <Footer />
        </div>
      </Router>
    );
  }
}

export default connect(null, {getEvents})(App);
