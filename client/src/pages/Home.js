import React from "react";
import Wrapper from "../Components/Wrapper";
import Hero from "../Components/Hero";
// import About from '../components/About';
import NicoleSos from "../Components/Carousel";
import NeighborhoodDropDown from "../Components/Search/NeighborhoodDropDown";
import Footer from "../Components/Footer";
import Genesis from './gensis.jpeg';
import "./Home.css";

// attempt to fix deploy problems

const Home = () =>(
      <Wrapper>
        {/* <Hero backgroundImage={Genesis}> */}
        <NicoleSos />
        <div className="dropDrop">
          <h1>Find Your Happy Hour</h1>
          <NeighborhoodDropDown />
        </div>
        {/* </Hero> */}
        {/* <About /> */}
        <Footer />
      </Wrapper>
)

export default Home;
