import React, { Component } from "react";
import "./FilterModal.css";
import {Button, CuisineDropDown, Input, NeighborhoodDropDown} from "../../Components/Search";


class FilterModal extends Component {

  state = {}

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    console.log(`You have selected: ${this.state.selectedOption}.`);
  }

  handleFilterSubmit = event => {
    event.preventDefault();

    // code to filter data and route user to results page with new params
  }

  render() {
    return (
      <div className='filter-modal-container'>
        <div className='modal-content'>
          <h3>Narrow Your Search</h3>
          <p>* All fields are optional</p>
          <div className='price-radio'>
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
            </div>
            <CuisineDropDown>{this.state.cuisineArr} </CuisineDropDown>
            <div className='booze-radio'>
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
              </div>
              <div className='time-radio'>
                <h4 className='filter-item'>Hours:</h4>
                <form onSubmit={this.handleFormSubmit}>
                  <div className="radio">
                    <label>
                      <input type="radio" value="Before4"
                      checked={this.state.selectedOption === 'Before4'}
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
              </div>
          <Button onClick={this.handleFilterSubmit}>Submit</Button>
        </div>
      </div>
    )
  }
}


export default FilterModal;
