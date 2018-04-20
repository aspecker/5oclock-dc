import React from 'react';
import ReactDOM from 'react-dom';

//Import components here
import App from './Components/App/App';
import NeighborhoodDropDown from './Components/Search/NeighborhoodDropDown'

// import react router
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';

const router = (

    <Provider store={store}>
         <Router>
             <Route exact path='/' component={App}>
                 <Route path='/' component={NeighborhoodDropDown}></Route>
                 {/* <Route path ='/view/:neighborhood' component={Results}></Route> */}
            </Route>
         </Router>
     </Provider>
)



ReactDOM.render(router, document.getElementById('root'));

