import React from "react";
import Wrapper from "../Components/Wrapper";
import Hero from "../Components/Hero";
import NicoleSos from "../Components/Carousel";
import About from './About';
import NeighborhoodDropDown from "../Components/Search/NeighborhoodDropDown";
import Footer from "../Components/Footer";
import "./Home.css";
import Background from './greybg.jpg';
import Logo from "../Components/Logo";
// import LogoImg from './five-pm-logo.png';


const wrapperStyle = {
  backgroundImage: `url(${Background})`,
  backgroundRepeat: 'repeat',
  minHeight: '100vh'
};

const Home = () =>(
      <Wrapper>
        <NicoleSos />
        <div className="dropDrop">
          <h1>Find Your Happy Hour</h1>
          <NeighborhoodDropDown />
        </div>
        <About />
        <Footer />
      </Wrapper>
)

export default Home;
