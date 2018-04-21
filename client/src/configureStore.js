import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
// import the root reducer
import rootReducer from './reducers/';

// import bars from './data/barList.json'

const loggerMiddleware = createLogger()

 /* eslint-disable no-underscore-dangle */
 export default function configureStore(preloadedState){
     return createStore(
        rootReducer, 
       preloadedState,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        ),
        window.__REDUX_DEVTOOLS_EXTENSION
    )
 }
 /* eslint-enable */
