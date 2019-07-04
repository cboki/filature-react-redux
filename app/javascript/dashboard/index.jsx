// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';

import positionsReducer from './reducers/positions_reducer';
import missionsReducer from './reducers/missions_reducer';

// State and reducers
const reducers = combineReducers({
  game: (state = null, action) => state,
  missions: missionsReducer,
  position: positionsReducer
})

const initialState = {
  game: JSON.parse(root.dataset.game),
  missions: [{id: 1, name: ""}],
  position: {
    latitude: 47.08259,
    longitude: 2.39638
  }
}

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
