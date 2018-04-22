import React, { Component } from 'react';
import API from './utils/API'
import Test from './Components/Test'
import logo from './logo.svg';
import './App.css';
import FilterModal from './Components/FilterModal';
import EachBar from './Components/EachBar';
import Container from './Components/Container';
import Footer from './Components/Footer';


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

  state = {
    image: 'https://unsplash.com/photos/ODua_Pc7VQY'
  };

  render() {
    return (
      <div className="App">
      {/*  <header className="App-header">
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
        <Test handleQueryNeighborhood={this.handleQueryNeighborhood}/>*/}
        <Container className='fluid'>
          <EachBar
            src={this.state.image}
            alt={this.state.image}
            name={'Logan Tavern'}
            neighborhood={'Logan Circle'}
            addressStreet={'1423 P St NW,'}
            addressCityZip={'Washington, DC 20005'}
            phone={'(202) 332-3710'}
            hours={'3PM to 7PM'}
            price={'$$'}
            cuisine={'American'}
            description={'Mon-Fri, 3-7 PM, Sat-Sun, 4-7 PM At the bar, at the communal table or on the patio.'}
            website={'http://logantavern.com/menu/'}
          />
        </Container>
        <Footer />

      </div>

    );
  }
}

export default App;
