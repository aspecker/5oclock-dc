import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./Carousel.css";
import slide1 from "./slide1.jpg";
import slide2 from "./slide2.jpg";
import slide3 from "./slide3.jpg";
import slide4 from "./slide4.jpg";
import slide5 from "./slide5.jpg";

class Slide extends Component {
    render() {
        return (
            <Carousel showArrows={false} showIndicators={false} infiniteLoop autoPlay transitionTime={2000} className="backDrop">
               <div>
                    <img src={ slide1 } alt='Night Out' />
                </div>
                <div>
                    <img src={ slide2} alt = 'Good Times' />
                </div>
                <div>
                    <img src={ slide3 } alt = 'Cocktail Hour'/>
                </div>
                <div>
                    <img src={ slide4 } alt='Fun with Friends'/>
                </div>
                <div>
                    <img src={ slide5 } alt='City Life'/>
                </div>
            </Carousel>
        );
    }
}

export default Slide;