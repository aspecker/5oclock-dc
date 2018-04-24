import React from "react";
import Wrapper from "../Components/Wrapper";
import Hero from "../Components/Hero";
// import About from '../components/About';
import NeighborhoodDropDown from "../Components/Search/NeighborhoodDropDown";
import Footer from "../Components/Footer";
import Genesis from './gensis.jpeg';
import Background from './greybg.jpg';
import Logo from "../Components/Logo";
import LogoImg from './five-pm-logo.png';


const wrapperStyle = {
  backgroundImage: `url(${Background})`,
  backgroundRepeat: 'repeat',
  minHeight: '100vh'
};
//
// const logoStyle = {
//   width: '100px',
//   position: 'fixed',
//   top: '10px',
//   left: '10px',
//   zIndex: 10
// }

// <img className='img img-responsive img-fluid' style={logoStyle} src={LogoImg} alt='logo' />

// attempt to fix deploy problems
const Home = () =>(

    <Wrapper style={wrapperStyle}>
      <Logo />
      <Hero backgroundImage={Genesis}>
        <h1>Find Your Happy Hour</h1>
        <NeighborhoodDropDown />
      </Hero>
      {/* <About /> */}
      <Footer />
    </Wrapper>
)

export default Home;
