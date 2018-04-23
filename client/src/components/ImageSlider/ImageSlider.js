import React, { Component } from "react";
import "./ImageSlider.css";

class Images extends Component {
    render() {
        return (
        <div className = "slider-wrapper">
          <ul className = "slides" style={divStyle}>
          { this.props.items.map(function(m, index){
            if(self.props.useImages === 'true') {
                  return <li style = {width} ><img src = {"images/"+m}/></li>
            } else {
               return <li style = {width} >{index}</li>
            }});
          }  
          </ul>
        </div>
        )};
}

class Pagers extends Component({
    render() {
        return (
        <div>
            <ul className = "pagers">
            { this.props.items.map(function(m, index){
                return <li onClick = {this.updateSlide.bind(this, index)}></li> 
            }, this)}
            </ul>
        </div>
        )}
})

class Slide extends Component({
    render() {
        return (
            <div className = "imgSlider">
            <Images items = {this.props.slides} useImages = {this.props.useImages} active = {this.state.active}></Images>
            <Pagers items = {this.props.slides}   callbackParent={this.onPagerClicked}></Pagers>
            </div>
        )
    }
})

export default ImagerSlider;