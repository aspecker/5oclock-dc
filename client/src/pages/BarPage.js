import React, { Component } from "react";
import EachBar from "../Components/EachBar";
import API from "../utils/API";
import { browserHistory } from 'react-router'



class BarPage extends Component {
  state ={}

  // stateful codes go here.


  render() {
    return (

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
    );
  }
}

export default BarPage;
