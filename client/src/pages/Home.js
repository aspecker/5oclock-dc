import React from "react";
import Wrapper from "../Components/Wrapper";
import Hero from "../Components/Hero";
// import About from '../components/About';
import NeighborhoodDropDown from "../Components/Search/NeighborhoodDropDown";
import Footer from "../Components/Footer";
import Background from './greybg.jpg';
import Logo from "../Components/Logo";
// import LogoImg from './five-pm-logo.png';


const wrapperStyle = {
  backgroundImage: `url(${Background})`,
  backgroundRepeat: 'repeat',
  minHeight: '100vh'
};

const Home = () =>(

    <Wrapper style={wrapperStyle}>
      <Logo />
      <Hero>
        <h1>Find Your Happy Hour</h1>
        <NeighborhoodDropDown />
      </Hero>
      {/* <About /> */}
      <Footer />
    </Wrapper>
)

export default Home;
