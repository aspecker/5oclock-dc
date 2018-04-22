import React, { Component } from "react";
import Wrapper from "../Components/Wrapper";
import Hero from "../Components/Hero";
import Input from "../Components/Search";
import Container from "../Components/Container";
import BarCard from "../Components/BarCard";
import Footer from '../Components/Footer'
import { List, ListItem } from "../Components/List";
import API from '../utils/API'
import { Link } from 'react-router-dom'


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


  render() {
    return (

      <Wrapper>
        <List>
          {this.state.bars.map(bar=>
            <ListItem key={bar._id} id={bar._id}>
              <Link to ={`/bar/${bar._id}`} >{bar.name}</Link>
            </ListItem>
          )}
        </List>
        <Footer />

      </Wrapper>
    ); // end of return
  } // end of render
} // end of class Results extends Component


export default Results;
