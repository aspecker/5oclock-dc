import React from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import BarPage from './pages/BarPage'
import Results from './pages/Results'
import SubmitForm from './pages/SubmitForm'
import NotFound from './pages/NotFound'
// images
import FivePM from './five-pm-logo.png';

const App = () =>(
  <div>
    <a href="/">
      <img className='img img-responsive img-fluid logo-img' src={ FivePM } alt='logo' />
    </a>
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path ='/' component={Home}/>
        <Route exact path ='/results/:neighborhood' component={Results}/>
        <Route path = '/results' component={Home}/>
        <Route exact path ='/bar/:bar' component={BarPage}/>
        <Route path = '/bar' component={Home}/>
        <Route path = '/submit' component={SubmitForm}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>
  </div>
)

export default App;
