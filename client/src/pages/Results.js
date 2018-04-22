import React, { Component } from "react";
import Wrapper from "../Components/Wrapper";
import Hero from "../Components/Hero";
import Input from "../Components/Search";
import Container from "../Components/Container";
import BarCard from "../Components/BarCard";
import Footer from '../Components/Footer'
import { List, ListItem } from "../Components/List";
import API from '../utils/API'


class Results extends Component {
  state = {
    bars: {}
  }

  componentDidMount(){
    this.fetchBars('Petworth');
  }

  fetchBars(neighborhood){
     API.queryNeighborhood(neighborhood)
     .then(res =>
      this.setState({bars: res.data}))
      console.log(this.state)
    
  }


  render() {
    return (

      <Wrapper>

        <List>

        <ListItem 
        />




        </List>
        <Footer />
      </Wrapper>
    ); // end of return
  } // end of render
} // end of class Results extends Component


export default Results;
