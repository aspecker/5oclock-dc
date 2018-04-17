import React, { Component } from 'react';

class Test extends Component{
   testUser={
        email:"h@h.com",
        username: "hello",
        password:"helloone"
    }
    render(){
        return(
            <button onClick={() => this.props.handlePost(this.testUser)}>SIGN UP</button>
                )
    }
}
export default Test