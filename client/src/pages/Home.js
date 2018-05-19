import React, {Component} from "react";
import Hero from "../Components/Hero";
import About from './About';
import NeighborhoodDropDown from "../Components/Search/NeighborhoodDropDown";
import Footer from "../Components/Footer";
import HeroPic from './slide5.jpg';

class Home extends Component {

  componentDidMount(){
    window.scrollTo(0,0);
  }

  render () {
      return (
      <div>
        <Hero backgroundImage={HeroPic}>
          <div>
            <h1 className='homeTitle'>Find Your Happy Hour</h1>
            <NeighborhoodDropDown />
          </div>
        </Hero>
        <About />
        <Footer />
      </div>
    )
}
}

export default Home;
