import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {playcard,getlist} from './reducer'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
const rootReducer = combineReducers({getlist,playcard})
const logger = createLogger();
const store = createStore(rootReducer,applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);

reportWebVitals();
