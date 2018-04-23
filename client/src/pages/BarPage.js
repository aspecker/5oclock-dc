import React, { Component } from "react";
import Wrapper from "../Components/Wrapper";
import Container from "../Components/Container";
import EachBar from "../Components/EachBar";
import API from "../utils/API";
import Footer from "../Components/Footer";
import { Button } from '../Components/Search/Button'




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


  render() {
    return (
      <Wrapper>
        <Container className="each-bar-container">
          <h1>{this.state.name}</h1>
         </Container>
      </Wrapper>
    );
  }
}

export default BarPage;
