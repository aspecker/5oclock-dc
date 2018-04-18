import React, { Component } from 'react';

class Test extends Component{
   logIn={       
        username: "h@h.com",
        password:"helloone"
    } 
    logInTwo={
        username: "g@g.com",
        password:"hellotwo"   
    }
   testUser={
        email:"h@h.com",
        username: "hello",
        password:"helloone"
    }
    testUserTwo={
        email:"g@g.com",
        username: "goodbye",
        password:"hellotwo"
    }
    render(){
        return(
            <div>
                <button onClick={() => this.props.handlePost(this.testUser)}>User One : sign up</button>
                <button onClick={()=> this.props.handleLogIn(this.logIn)}>User One: Login</button>
                <button onClick={()=>this.props.handlePost(this.testUserTwo)} >User Two : sign up</button>
                <button onClick={()=> this.props.handleLogIn(this.logInTwo)} > User Two: Login</button>
                <button onClick={()=> this.props.handleLogOut()} >logout</button>
            </div>
                )
    }
}
export default Test