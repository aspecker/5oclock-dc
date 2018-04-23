import React, { Component } from "react";
import Wrapper from "../Components/Wrapper";
// import Container from "../Components/Container";
import EachBar from "../Components/EachBar";
import API from "../utils/API";
import Footer from "../Components/Footer";
// import { Button } from '../Components/Search/Button'




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
            handleClick={this.state.handleClick}
           />
        <Footer />
      </Wrapper>
    );
  }
}

export default BarPage;
