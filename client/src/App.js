import React, { Component } from 'react';
import API from './utils/API'
import Test from './Components/Test'
import logo from './logo.svg';
import './App.css';
import FilterModal from './Components/FilterModal';

class App extends Component {
  // functions that are used in testing

  //user auth
handleCurrentUser = () =>{
  API.currentUser()
    .then(res=>{
    // use res.data in order to find what the record you are looking for
    console.log(res.data)
  })
}

  handleSignUp=(obj)=>{
    API.signUp(obj)
  }

  handleLogOut= () =>{
    API.logOut()
  }

  handleLogIn=(obj)=>{
    API.logIn(obj)
  }

  //bars 
  handleNewBar = (obj)=>{
    API.barNew(obj)
  }

  handleFindBars = ()=>{
    API.barFindAll()
    .then(res=>{
      // use res.data in order to find what the record you are looking for
      console.log(res.data)
    })
  }

  handleFindOneBar = (id) =>{
    API.barFindOne(id)
    .then(res=>{
      // use res.data in order to find what the record you are looking for
      console.log(res.data)
    })
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

        <Test handleSignUp={this.handleSignUp} handleLogIn={this.handleLogIn} handleLogOut={this.handleLogOut} handleCurrentUser={this.handleCurrentUser} />
      </div>
    );
  }
}

export default App;
