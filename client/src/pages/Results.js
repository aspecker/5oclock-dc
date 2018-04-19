import React from "react";
import Wrapper from "../Components/Wrapper";
import Hero from "../Components/Hero";
import Input from "../Components/Search";
import Container from "../Components/Container";
import BarCard from "../Components/BarCard";
import { List, ListItem } from "../Components/List";


class Results extends Component {
  state ={}

  // stateful codes go here.


  render() {
    return (

      <Wrapper>
        <Hero backgroundImage={this.state.image}>
          <h1>{this.state.neighborhood}</h1>
          <Button handleClick={this.handleClick}>Filter</Button>
        </Hero>
        <Input
            value={this.state.value}
            key={this.state.id}
            name={this.state.name}
            />
        <Button handleClick={this.handleClick}>Search</Button>
        <Container>
          <BarCard name={this.state.name}
            cuisine={this.state.cuisine}
            neighborhood={this.state.neighborhood}
            hours={this.state.hours}
            price={this.state.price} />
        </Container>
        <List>
          {/*  map through our neighborhood list and put them in the li*/}
        <ListItem />
        </List>
        <Footer />
      </Wrapper>
    ); // end of return
  } // end of render
} // end of class Results extends Component


export default Results;
