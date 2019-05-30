import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import '../App.css';
import { BrowserRouter as Switch } from 'react-router-dom';
import About from '../containers/About';
import Scores from '../containers/Scores';
import Game from '../containers/Game';
import Home from './Home.js';
import EnterScore from '../components/Game/EnterScore.js';
import NavBar from './NavBar';

const App = ({ store }) => {
  return (
    <div>
      <Provider store={store} >
        <Router history={browserHistory}>
        <NavBar />
          <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/scores" component={ Scores } />
          <Route path="/game" component={ Game } />
          <Route path="/enter_score" component = { EnterScore } />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;