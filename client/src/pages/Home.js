import React from "react";
import Wrapper from "../Components/Wrapper";
import Hero from "../Components/Hero";
import About from '../Components/About';
import Slide from "../Components/Carousel";
import NeighborhoodDropDown from "../Components/Search/NeighborhoodDropDown";
import Footer from "../Components/Footer";
import Genesis from './gensis.jpeg';
import "./Home.css";

// attempt to fix deploy problems

const Home = () =>(
      <Wrapper>
        <div className="dropDown">
          <h1>Find Your Happy Hour</h1>
          <NeighborhoodDropDown />
        </div>
        <Slide />
        <About />
        <Footer />
      </Wrapper>
)

export default Home;
