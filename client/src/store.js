import { createStore, compose } from 'redux';

// import the root reducer
import rootReducer from './reducers/index';

// import neighborhoods from './data/neighborhoods';
// import cuisines from './data/cuisines';
import bars from './data/barList.json'

const defaultState = {
    bars
}


 /* eslint-disable no-underscore-dangle */
const store = createStore(rootReducer, defaultState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

if(module.hot){
    module.hot.accept('./reducers', ()=>{
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer)
    })
}
 export default store;
