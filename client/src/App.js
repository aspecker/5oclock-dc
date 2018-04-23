import React from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import BarPage from './pages/BarPage'
import Results from './pages/Results'
import NotFound from './pages/NotFound'

const App = () =>(
  <Router basename={process.env.PUBLIC_URL}>
    <div>
    <Switch>
      <Route exact path ='/' component={Home}/>
      <Route exact path ='/results/:neighborhood' component={Results}/>
      <Route path = '/results' component={Home}/>
      <Route exact path ='/bar/:bar' component={BarPage}/>
      <Route component={NotFound}/>
    </Switch>
    </div>
  </Router>
)

export default App;
