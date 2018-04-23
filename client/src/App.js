import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Home from './pages/Home';
import BarPage from './pages/BarPage'
import Results from './pages/Results'

const App = () =>(
  <Router basename={process.env.PUBLIC_URL}>
    <div>
    <Route exact path ='/' component={Home}/>
    <Route exact path ='/results/:neighborhood' component={Results}/>
    <Route exact path ='/bar/:bar' component={BarPage}/>
    </div>
  </Router>
)

export default App;
