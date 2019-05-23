//dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

//css
import './index.css';

//store
import store from './store';

//components
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root'));
  
  registerServiceWorker();
