import React from "react";
import Wrapper from "../Components/Wrapper";
import Hero from "../Components/Hero";
import Input from "../Components/Search";
import Container from "../Components/Container";
import BarCard from "../Components/BarCard";
import { List, ListItem } from "../Components/List";
import Row from "../Components/Row";
import Col from "../Components/Col";

class Results extends Component {
  state ={}

  // stateful codes go here.


  render() {
    return (

      <Wrapper>
        <Container className='fluid'>
          <Hero style={this.state.image}>
            <h1>{this.state.neighborhood}</h1>
          </Hero>
          <Row >
            <Col size='sm-6 md-4'>
            <BarCard
              image={this.state.image}
              name={this.state.name}
              cuisine={this.state.cuisine}
              neighborhood={this.state.neighborhood}
              hours={this.state.hours}
              price={this.state.price}
            />
            </Col>
          </Row>
        </Container>
        <Footer />

      </Wrapper>
    ); // end of return
  } // end of render
} // end of class Results extends Component


export default Results;
