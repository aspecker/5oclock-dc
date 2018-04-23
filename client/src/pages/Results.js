import React, { Component } from "react";
import Wrapper from "../Components/Wrapper";
import Hero from "../Components/Hero";
import Container from "../Components/Container";
import Row from "../Components/Row";
import Col from "../Components/Col";
import BarCard from "../Components/BarCard";
import Footer from '../Components/Footer'
// import { List, ListItem } from "../Components/List";
import API from '../utils/API'
import { Link } from 'react-router-dom'
import "./Results.css";
import neighborhoods from '../data/neighborhoods.js'


class Results extends Component {
  state = {
    bars: []
  }

  componentDidMount(){
    this.fetchBars(this.props.match.params.neighborhood);
  }

  fetchBars(neighborhood){
     API.queryNeighborhood(neighborhood)
     .then(res =>{
       console.log(res.data)
      this.setState({bars: res.data})
      })
      .catch(err=> console.log(err));

  }

  processPrice(int){
    switch (int){
      case 1:
        return "$"
      case 2:
        return "$$"
      case 3:
        return "$$$"
      default:
        return 'No Price Available'
    }
  }


  render() {
    return (

      <Wrapper>
        <Hero >
          <h1></h1>
        </Hero>
        <div className="card-results-wrapper">
          <Container>
            <Row >
              <Col size='sm-6 md-4'>
                {this.state.bars.map(bar=>
                  <Link
                  to ={`/bar/${bar._id}`}>
                    <BarCard key={bar._id} id={bar._id}
                      backgroundImage={bar.image}
                      image={bar.image}
                      name={bar.name}
                      cuisine={bar.cuisine}
                      neighborhood={bar.neighborhood}
                      startTime={bar.startTime}
                      endTime={bar.endTime}
                      price={this.processPrice(bar.price)}>
                    </BarCard>
                  </Link>
                )}
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </Wrapper>
    ); // end of return
  } // end of render
} // end of class Results extends Component


export default Results;
