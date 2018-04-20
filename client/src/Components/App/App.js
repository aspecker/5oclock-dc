import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';
import Main from '../Main';

function mapStateToProps(state){
  return{
    bars: state.bars
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators,dispatch);
}

const App = connect(mapStateToProps,mapDispatchToProps)(Main);

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
