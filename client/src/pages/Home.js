import React from "react";
import Wrapper from "../Components/Wrapper";
import Hero from "../Components/Hero";
import NeighborhoodDropDown from "../Components/NeighborhoodDropDown";
import Container from "../Components/Container";
import { List, ListItem } from "../Components/List";
import Footer from "../Components/Footer";





class Home extends Component {
  state ={}

  // stateful codes go here.


  render() {
    return (

      <Wrapper>
        <Hero>
          <h1>Find Your Happy Hour</h1>
          <NeighborhoodDropDown>{this.state.neighborhoodArr} Choose a Neighborhood</NeighborhoodDropDown>
        </Hero>
        <Container>

        </Container>
      </Wrapper>
    ); // end of return
  } // end of render
} // end of class Home extends Component


export default Home;
