import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import bars from './bars';

const rootReducer = combineReducers({bars, routing: routerReducer});

export default rootReducer;