import React, { Component } from "react";
import Wrapper from "../Components/Wrapper";
// import Container from "../Components/Container";
import EachBar from "../Components/EachBar";
import API from "../utils/API";
import Footer from "../Components/Footer";
import { Link } from 'react-router-dom';
import Background from './texturedbg.jpg';

// import { Button } from '../Components/Search/Button'

const wrapperStyle = {

  backgroundImage: `url(${Background})`,
  backgroundRepeat: 'repeat'
};



class BarPage extends Component {
  state ={}


  componentDidMount(){
    this.fetchOneBar(this.props.match.params.bar)
  }

  fetchOneBar(barId){
    API.barFindOne(barId)
    .then(res=>{
      console.log(res.data)
      this.setState(res.data)
    })
    .catch(err=>console.log(err))
  }

  handleClick (e) {

  }



  render() {
    return (
      <Wrapper style={wrapperStyle}>
        <EachBar
            name={this.state.name}
            neighborhood={this.state.neighborhood}
            address={this.state.address}
            city={this.state.city}
            state={this.state.state}
            ZIP={this.state.ZIP}
            phone={this.state.phone}
            startTime={this.state.startTime}
            endTime={this.state.endTime}
            price={this.state.price}
            cuisine={this.state.cuisine}
            description={this.state.description}
            menuLink={this.state.menuLink}
            handleClick={this.state.handleClick}
           />
        <Footer />
      </Wrapper>
    );
  }
}

export default BarPage;
