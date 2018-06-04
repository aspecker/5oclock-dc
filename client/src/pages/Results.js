import React, { Component } from "react";
import Hero from "../Components/Hero";
import BarCard from "../Components/BarCard";
import FilterModal from "../Components/FilterModal";
import { Button } from "../Components/Search/Button";
import API from "../utils/API";
import { Link } from "react-router-dom";
import neighborhoods from "../data/neighborhoods.js";

class Results extends Component {
  state = {
    bars: []
  };

  componentDidMount() {
    this.fetchBars(this.props.match.params.neighborhood);
    this.mounted = true;
    this.setState({
      modalOpen: false
    });
  }

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
    console.log("toggler pressed");
  };

  componentWillUnmount() {
    this.mounted = false;
  }

  fetchBars(neighborhood) {
    if (neighborhood === "All Bars") {
      API.barFindAll()
        .then(res => {
          this.setState({ bars: res.data });
        })
        .catch(err => console.log(err));
      return;
    }
    API.queryNeighborhood(neighborhood)
      .then(res => {
        this.setState({ bars: res.data });
      })
      .catch(err => console.log(err));
  }

  filterBars(neighborhood, price, cuisine) {
    if (neighborhood === "All Bars") {
      API.queryFilters("null", price, cuisine).then(res => {
        console.log(res.data);
        this.setState({ bars: res.data });
        console.log(this.state.bars);
      });
      this.toggleModal.bind(this)();
      return;
    }
    API.queryFilters(neighborhood, price, cuisine).then(res => {
      console.log(res.data);
      this.setState({ bars: res.data });
      console.log(this.state.bars);
    });
    this.toggleModal.bind(this)();
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
      <div>
        <Hero backgroundImage={
            this.findNeighborhoodImage(this.props.match.params.neighborhood)[0]
              .image
          }>
          <h1 className="title is-1">{this.props.match.params.neighborhood}</h1>
          <div>
            <Link to="/">
              <Button> Change Neighborhood</Button>
            </Link>
            <Button onClick={this.toggleModal}>
              Filter Bars
            </Button>
          </div>
          <FilterModal
            show={this.state.modalOpen}
            onClose={this.toggleModal}
            filterAPI={this.filterBars.bind(this)}
            toggle={this.toggleModal.bind(this)}
            neighborhood={this.props.match.params.neighborhood}
          />
        </Hero>
        <div className="columns">
              {/* Filter Conditional */}
              {/* If there are no bars found in the filter, render nothing found
                  Else render the bar cards */}
              {this.state.bars.length === 0 ? (
                <div>
                  <h1> No Bars Found </h1>
                  <p> There are no bars that match your search criteria in this neighborhood.  Please try again or search in all bars category in the neighborhood selection.</p>
                  <Button onClick={() => window.location.reload()}>
                    Clear Filter
                  </Button>
                </div>
              ) : (
                this.state.bars.map(bar => (
                    <div className="column is-one-third-desktop is-half-tablet" key={bar._id} >
                      <div>
                        {/* modal conditional */}
                        {/* If the modal is not open, render the bar cards as links
                            Else  no links*/}
                        {!this.state.modalOpen ? (
                          <Link to={`/bar/${bar._id}`}>
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
                        ) : (
                          <BarCard
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
                        )}{" "}
                        {/* End of Modal Conditional*/}
                      </div>
                    </div>
                ))
              )}{" "}
              {/* End of Filter Conditional */}
        </div>

      </div>
    ); // end of return
  } // end of render
} // end of class Results extends Component

export default Results;
