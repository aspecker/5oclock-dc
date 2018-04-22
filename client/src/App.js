import React, { Component } from 'react';
import API from './utils/API'
import Test from './Components/Test'
import logo from './logo.svg';
import './App.css';
import FilterModal from './Components/FilterModal';
import EachBar from './Components/EachBar';


class App extends Component {
  // functions that are used in testing

  //user auth
  handleCurrentUser = () =>{
    API.currentUser()
      .then(res=>{
      // use res.data in order to find what the record you are looking for
      console.log(res.data)
    })
  };

  handleSignUp=(obj)=>{
    API.signUp(obj)
  };

  handleLogOut= () =>{
    API.logOut()
  };

  handleLogIn=(obj)=>{
    API.logIn(obj)
  };

  //bars 
  handleBarCreate = (obj)=>{
    API.barNew(obj)
  }

  handleBarUpdate = (id, obj) =>{
    API.barUpdate(id, obj)
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

  //queries
  handleQueryNeighborhood =(query)=>{
    API.queryNeighborhood(query)
    .then(res =>{
      console.log(res.data)
    })
  }
  handleQueryFilter =(neighborhood, cuisine,price)=>{
    API.queryFilters(neighborhood, cuisine,price)
    .then(res =>{
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
        {/* test user auth */}
        {/* <Test handleSignUp={this.handleSignUp} handleLogIn={this.handleLogIn} handleLogOut={this.handleLogOut} handleCurrentUser={this.handleCurrentUser} /> */}
        
        {/* test bar routes */}
        {/* <Test handleFindOneBar={this.handleFindOneBar} handleBarCreate={this.handleBarCreate} handleBarUpdate={this.handleBarUpdate} handleFindBars={this.handleFindBars} handleFindOneBar={this.handleFindOneBar} /> */}
        {/* test queries */}
        <Test handleQueryNeighborhood={this.handleQueryNeighborhood} handleQueryFilter={this.handleQueryFilter} />
        <FilterModal />
        <EachBar />

      </div>

    );
  }
}

export default App;
