import React, {Component} from "react";
import Wrapper from "../Components/Wrapper";
import Slide from "../Components/Carousel";
import About from './About';
import NeighborhoodDropDown from "../Components/Search/NeighborhoodDropDown";
import Footer from "../Components/Footer";
import "./Home.css";
import Background from './greybg.jpg';
import Logo from "../Components/Logo";



const wrapperStyle = {
  backgroundImage: `url(${Background})`,
  backgroundRepeat: 'repeat',
  minHeight: '100vh'
};

class Home extends Component {
      
  componentDidMount(){
    window.scrollTo(0,0);
  }
  
  render () {
      return (
      <Wrapper style={wrapperStyle}>
        <Logo />
        <div className="dropDown">
          <h1>Find Your Happy Hour</h1>
          <NeighborhoodDropDown />
        </div>
        <Slide />
        <About />
        <Footer />
      </Wrapper>
    )
}
}

export default Home;
