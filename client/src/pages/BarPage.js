import React, { Component } from "react";
import Wrapper from "../Components/Wrapper";
import Container from "../Components/Container";
import EachBar from "../Components/EachBar";
import API from "../utils/API";
import Footer from "../Components/Footer";
import { Button } from '../Components/Search/Button'




class BarPage extends Component {
  state ={}

  // stateful codes go here.


  render() {
    return (
      <Wrapper>
        <Container className="each-bar-container">
          <EachBar
            name={this.state.name}
            neighborhood={this.state.neighborhood}
            addressStreet={this.state.addressStreet}
            addressCityZip={this.state.addressCityZip}
            phone={this.state.phone}
            hours={this.state.hours}
            price={this.state.price}
            cuisine={this.state.cuisine}
            description={this.state.description}
            website={this.state.website}
           />
         </Container>
        <Button onclick={this.handleClick}>Back to Results</Button>
      </Wrapper>
    );
  }
}

export default BarPage;
