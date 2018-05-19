import React, { Component } from "react";

import EachBar from "./EachBar";
import Wrapper from "../Components/Wrapper";
// import EachBar from "../Components/EachBar";
import API from "../utils/API";
import Footer from "../Components/Footer";
import Logo from "../Components/Logo";

class BarPage extends Component {
  state ={}

  componentDidMount(){
    window.scrollTo(0,0);
    this.fetchOneBar(this.props.match.params.bar)
  }

  fetchOneBar(barId){
    API.barFindOne(barId)
    .then(res=>{
      this.setState(res.data)
    })
    .catch(err=>console.log(err))
  }

  convertPrice(int){
    switch (int){
      case 1:
        return '$'
      case 2:
        return  '$$'
      case 3:
        return '$$$'
      default:
        return 'No Price Available'
    }
  }

  render() {
    return (
      <Wrapper>
        <Logo />
        <EachBar
            name={this.state.name}
            image={this.state.image}
            neighborhood={this.state.neighborhood}
            address={this.state.address}
            city={this.state.city}
            state={this.state.state}
            ZIP={this.state.ZIP}
            phone={this.state.phone}
            startTime={this.state.startTime}
            endTime={this.state.endTime}
            price={this.convertPrice(this.state.price)}
            cuisine={this.state.cuisine}
            description={this.state.description}
            menuLink={this.state.menuLink}
            onClick={this.state.onClick}
          />
        <Footer />
      </Wrapper>
    );
  }
}

export default BarPage;
