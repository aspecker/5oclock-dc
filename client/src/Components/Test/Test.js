import React, { Component } from 'react';

class Test extends Component{
   logIn={       
    username: "h@h.com",
    password:"helloone"
} 
   testUser={
        email:"h@h.com",
        username: "hello",
        password:"helloone"
    }
    render(){
        return(
            <div>
                <button onClick={() => this.props.handlePost(this.testUser)}>SIGN UP</button>
                <button onClick={()=> this.props.handleLogIn(this.logIn)}>Login</button>
            </div>
                )
    }
}
export default Test