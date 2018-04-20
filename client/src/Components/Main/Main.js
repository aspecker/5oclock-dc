import React from 'react';
// import { Link } from 'react-router';

class Main extends React.Component{
    render(){
        return(
            <div>
                <div className ='nav-goes-here'/>
                <div className = 'hero-goes-here'/>
                {React.cloneElement({...this.props}.children,{...this.props})}
            </div>
        )
    }
}

export default Main;