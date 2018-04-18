import React, { Component } from "react";
import "./FilterModal.css";
import * "../Search";

class FilterModal extends Component {

  state = {}

  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  },

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    console.log(`You have selected: ${this.state.selectedOption}.`);
  },

  handleFilterSubmit = event => {
    event.preventDefault();

    // code to filter data and route user to results page with new params
  },

  render() {
    return (
      <div className='filter-modal-container'>
        <h3>Narrow Your Search</h3>
        <p>* All fields are optional</p>
        <h4 className='filter-item'>Price:</h4>
        <form onSubmit={this.handleFormSubmit}>
          <div className="radio">
            <label>
              <input type="radio" value="$"
              checked={this.state.selectedOption === '$'}
              onChange={this.handleOptionChange} />
              $
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="$$"
              checked={this.state.selectedOption === '$$'}
              onChange={this.handleOptionChange} />
              $$
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="$$$"
              checked={this.state.selectedOption === '$$$'}
              onChange={this.handleOptionChange} />
              $$$
            </label>
          </div>
        </form>

        <CuisineDropDown />

        <h4 className='filter-item'>Drink Type:</h4>
        <form onSubmit={this.handleFormSubmit}>
          <div className="radio">
            <label>
              <input type="radio" value="Beer"
              checked={this.state.selectedOption === 'Beer'}
              onChange={this.handleOptionChange} />
              Beer
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="Wine"
              checked={this.state.selectedOption === 'Wine'}
              onChange={this.handleOptionChange} />
              Wine
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="Cocktail"
              checked={this.state.selectedOption === 'Cocktail'}
              onChange={this.handleOptionChange} />
              Cocktail
            </label>
          </div>
        </form>
        <h4 className='filter-item'>Hours:</h4>
        <form onSubmit={this.handleFormSubmit}>
          <div className="radio">
            <label>
              <input type="radio" value="Beer"
              checked={this.state.selectedOption === 'Beer'}
              onChange={this.handleOptionChange} />
              Before 4PM
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="After7"
              checked={this.state.selectedOption === 'After7'}
              onChange={this.handleOptionChange} />
              After 7PM
            </label>
          </div>
        </form>
        <button onClick={this.handleFilterSubmit} className="btn btn-default" type="submit">Submit</button>
      </div>
    )
  }
}


export default FilterModal
