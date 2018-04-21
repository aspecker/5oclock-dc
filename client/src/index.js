// import dependancies
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import rootReducer from './reducers'
import Root from './containers/Root'
import configureStore from './configureStore'

// Renders the Root component

const store =createStore(rootReducer)

render(<Root store={store}/>, 
    document.getElementById('root')
);

