import React from 'react';
import ReactDOM from 'react-dom';

//Import components here
import App from './Components/App/App';

// import react router
import { BrowserRouter as Router, Route } from 'react-router';
import { IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';

const router = (
    <div>
    {/* // <Provider store={store}>
    //     <Router>
    //         <Route path='/' component={App}>
    //             <IndexRoute component={Landing}></IndexRoute>
    //             <Route path ='/view/:neighborhood' component={Results}></Route>
    //         </Route>
    //     </Router>
    // </Provider> */}
    RENDERING PAGE
    </div>
)



ReactDOM.render(<App />, document.getElementById('root'));

