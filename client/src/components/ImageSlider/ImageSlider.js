import React, { Component } from "react";
import "./ImageSlider.css";

const ImageSlider = props => (
    <div className='container'>
        <div className='featured-img-box'>
            <img className='img img-responsive img-fluid featured-img' alt={props.image} src={props.image}/>
        </div> {/* .featured-img-box */}
        <div className='content'>
            <h3>{props.name}</h3>
            <h2>{props.neighborhood}</h2>
            <h2>{props.hours}</h2>
        </div> {/* .content */}
    </div>
);

export default ImageSlider