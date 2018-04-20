import React, { Component } from 'react';
import API from '../../utils/API'
import Test from '../Test'
import './App.css';
import FilterModal from '../FilterModal';
import EachBar from '../EachBar';


class App extends Component {
  // functions that are used in testing

  //user auth
  render() {
    return (
      <div>
        <Test handleFindOneBar={this.handleFindOneBar} handleBarCreate={this.handleBarCreate} handleBarUpdate={this.handleBarUpdate} handleFindBars={this.handleFindBars} handleFindOneBar={this.handleFindOneBar} />
        <FilterModal />
        <EachBar />

      </div>

    );
  }
}

export default App;


/*
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

*/
