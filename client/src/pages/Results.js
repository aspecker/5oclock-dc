import React, { Component } from "react";
import Wrapper from "../Components/Wrapper";
import Hero from "../Components/Hero";
import Container from "../Components/Container";
import Row from "../Components/Row";
import Col from "../Components/Col";
import BarCard from "../Components/BarCard";
import Footer from "../Components/Footer";
import FilterModal from "../Components/FilterModal";
import { Button } from "../Components/Search/Button";
import API from "../utils/API";
import { Link } from "react-router-dom";
import "./Results.css";
import neighborhoods from "../data/neighborhoods.js";
import Background from "./greybg.jpg";
import Logo from "../Components/Logo";

const wrapperStyle = {
  backgroundImage: `url(${Background})`,
  backgroundRepeat: "repeat"
};

const heroStyle = {
  fontSize: "1rem"
};

class Results extends Component {
  state = {
    bars: []
  };

  componentDidMount() {
    window.scrollTo(0, 150);
    this.fetchBars(this.props.match.params.neighborhood);
    this.mounted = true;
  }
  componentWillUnmount() {
    this.mounted = false;
  }

  fetchBars(neighborhood) {
    API.queryNeighborhood(neighborhood)
      .then(res => {
        this.setState({ bars: res.data });
      })
      .catch(err => console.log(err));
  }
  filterBars(neighborhood, cuisine, price) {
    API.queryFilters(neighborhood, cuisine, price).then(res => {
      console.log(res.data);
      this.setState({ bars: res.data });
      console.log(this.state.bars);
    });
  }
  findNeighborhoodImage(neighborhood) {
    return neighborhoods.filter(hood => hood.name === neighborhood);
  }

  convertPrice(int) {
    switch (int) {
      case 1:
        return "$";
      case 2:
        return "$$";
      case 3:
        return "$$$";
      default:
        return "No Price Available";
    }
  }

  render() {
    return (
      <Wrapper style={wrapperStyle}>
        <Logo />
        <Hero
          style={heroStyle}
          backgroundImage={
            this.findNeighborhoodImage(this.props.match.params.neighborhood)[0]
              .image
          }
        >
          <h1>{this.props.match.params.neighborhood}</h1>
          <Link to="/">
            <Button> Change Neighborhood</Button>
          </Link>
          <FilterModal />
        </Hero>
        <div className="card-results-wrapper">
          <Container>
            {/* <button onClick={() => this.filterBars("Georgetown", "null", 2)}>
              {" "}
              search for Georgetown bars at 2 pricepoint{" "}
            </button> */}
            <Row>
              {this.state.bars.map(bar => (
                <Col size="sm-6 md-4">
                  <div className="card-columns">
                    <Link key={bar._id} to={`/bar/${bar._id}`}>
                      <BarCard
                        key={bar._id}
                        id={bar._id}
                        backgroundImage={bar.image}
                        image={bar.image}
                        name={bar.name}
                        cuisine={bar.cuisine}
                        neighborhood={bar.neighborhood}
                        startTime={bar.startTime}
                        endTime={bar.endTime}
                        price={this.convertPrice(bar.price)}
                      />
                    </Link>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
        <Footer />
      </Wrapper>
    ); // end of return
  } // end of render
} // end of class Results extends Component

export default Results;
