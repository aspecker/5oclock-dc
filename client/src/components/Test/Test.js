import React, { Component } from 'react';
// this document is very useful for seeing what format different requests are expected to be in

class Test extends Component{
    // test User auth
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

    // Test bar routes
    barOne={
        name:" Test Bar",
        addressStreet:"1234 holy lane",
        address:" 1523 lets do it",
        city:"washington",
        ZIP: "2000544",
        neighborhood: "the bronx",
        hours:" this is the worst",
        price: "1235",
    }

    barTwo={
        name:" TTwo",
        addressStreet:"67890 hello drive",
        address:" get at me",
        city:"los angeles",
        ZIP: "90210",
        neighborhood: "Compton",
        hours:" These streets",
        price: "0978897658",
    }

    barUpdated={
        name:" UPDATE",
        addressStreet:"UPDATE",
        address:"UPDATE",
        city:"UPDATE",
        ZIP: "56789",
        neighborhood: "UPDATE",
        hours:"UPDATE",
        price: "123456",
    }

    //Test Queries

    render(){
        return(
            <div>
                {/* user auth testing */}
                {/* <button onClick={() => this.props.handleSignUp(this.testUser)}>User One : sign up</button>
                <button onClick={()=> this.props.handleLogIn(this.logIn)}>User One: Login</button>
                <button onClick={()=>this.props.handleSignUp(this.testUserTwo)} >User Two : sign up</button>
                <button onClick={()=> this.props.handleLogIn(this.logInTwo)} > User Two: Login</button>
                <button onClick={()=> this.props.handleLogOut()} >logout</button>
                <button onClick={()=> this.props.handleCurrentUser()} >Current User Info</button> */}

                {/* bar crud testing */}
                {/* <button onClick={()=> this.props.handleBarCreate(this.barOne)}> Create Bar One </button>
                <button onClick={()=> this.props.handleFindOneBar("5ad8be403a192627a0a44833")} > Find Bar One</button>
                <button onClick={()=> this.props.handleBarCreate(this.barTwo)}> Create Bar two </button>
                <button onClick={()=> this.props.handleFindOneBar("5ad8bd6e3a192627a0a44832")} > Find Bar Two</button>
                <button onClick={()=> this.props.handleFindBars()}>Find All Bars</button>
                <button onClick={()=> this.props.handleBarUpdate("5ad8be403a192627a0a44833",this.barUpdated)}> Update Bar One </button> */}

                {/* query Testing */}
                <button onClick={()=> this.props.handleQueryNeighborhood("Georgetown")}> search for Georgetown bars </button>
                
                
            </div>
                )
    }
}
export default Test