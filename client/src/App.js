import React, { Component } from 'react';
import API from './utils/API'
import Test from './Components/Test'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  handlePost=(obj)=>{
    API.signUp(obj)
  }
  handleLogIn=(obj)=>{
    API.logIn(obj)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Test handlePost={this.handlePost} handleLogIn={this.handleLogIn}/>
      </div>
    );
  }
}

export default App;
