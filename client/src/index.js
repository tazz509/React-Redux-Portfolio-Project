import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

let initial = { high_scores: [], board: {current_board: [], start_board: [], solution_board: [], start_time: null, solved: false} }
let store = createStore(rootReducer, initial, applyMiddleware(thunk));

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root')
);