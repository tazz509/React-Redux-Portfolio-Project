//dependencies
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

//reducers
import EventsReducer from './reducers/events_reducer';
import EventsFormData from './reducers/eventFormData';
import Errors from './reducers/errors_reducer';

const reducers = combineReducers({
    events: EventsReducer,
    form: EventsFormData,
    errors: Errors
});

const middleware = [thunk]
let store = createStore(reducers,   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),    //creates our store with rootReducer, preloaded state, and enhancers like chrome extension
  applyMiddleware(...middleware)
);

export default store;


