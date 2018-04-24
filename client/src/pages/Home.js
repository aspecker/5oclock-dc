import React from "react";
import Wrapper from "../Components/Wrapper";
import Hero from "../Components/Hero";
<<<<<<< HEAD
import About from '../Components/About';
import Slide from "../Components/Carousel";
=======
import NicoleSos from "../Components/Carousel";
import About from './About';
>>>>>>> 1567eff40ed84e4f2c51c1af1bf69abb37c1b5ad
import NeighborhoodDropDown from "../Components/Search/NeighborhoodDropDown";
import Footer from "../Components/Footer";
import Genesis from './gensis.jpeg';
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
<<<<<<< HEAD
        <div className="dropDown">
          <h1>Find Your Happy Hour</h1>
          <NeighborhoodDropDown />
        </div>
        <Slide />
=======
        <NicoleSos />
        <div className="dropDrop">
          <h1>Find Your Happy Hour</h1>
          <NeighborhoodDropDown />
        </div>
>>>>>>> 1567eff40ed84e4f2c51c1af1bf69abb37c1b5ad
        <About />
        <Footer />
      </Wrapper>
)

export default Home;
