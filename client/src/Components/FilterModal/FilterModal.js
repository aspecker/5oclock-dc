import React, { Component } from "react";
import "./FilterModal.css";
import {Button, Dropdown} from "../../Components/Search";


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

  handlePriceOptionChange = changeEvent => {
    this.setState({
      selectedPriceOption: changeEvent.target.value
    });
  }
  handleDrinkOptionChange = changeEvent => {
    this.setState({
      selectedDrinkOption: changeEvent.target.value
    });
  }
  handleTimeOptionChange = changeEvent => {
    this.setState({
      selectedTimeOption: changeEvent.target.value
    });
  }

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    console.log(`You have selected: ${this.state.selectedPriceOption}.`);
    console.log(`You have selected: ${this.state.selectedDrinkOption}.`);
    console.log(`You have selected: ${this.state.selectedTimeOption}.`);

  }

  handleFilterSubmit = event => {
    event.preventDefault();

    // code to filter data and route user to results page with new params
  }

  handleFormReset = event => {
    event.preventDefault();
    // code to clear all search fields goes here
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
                    checked={this.state.selectedPriceOption === '$'}
                    onChange={this.handlePriceOptionChange} />
                    $
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input type="radio" value="$$"
                    checked={this.state.selectedPriceOption === '$$'}
                    onChange={this.handlePriceOptionChange} />
                    $$
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input type="radio" value="$$$"
                    checked={this.state.selectedPriceOption === '$$$'}
                    onChange={this.handlePriceOptionChange} />
                    $$$
                  </label>
                </div>
              </form>
            </div>
            <Dropdown>{this.state.cuisineArr} Choose your cuisine type...</Dropdown>
            <div className='booze-radio'>
                <h4 className='filter-item'>Drink Type:</h4>
                <form onSubmit={this.handleFormSubmit}>
                  <div className="radio">
                    <label>
                      <input type="radio" value="Beer"
                      checked={this.state.selectedDrinkOption === 'Beer'}
                      onChange={this.handleDrinkOptionChange} />
                      Beer
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio" value="Wine"
                      checked={this.state.selectedDrinkOption === 'Wine'}
                      onChange={this.handleDrinkOptionChange} />
                      Wine
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio" value="Cocktail"
                      checked={this.state.selectedDrinkOption === 'Cocktail'}
                      onChange={this.handleDrinkOptionChange} />
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
                      checked={this.state.selectedTimeOption === 'Before4'}
                      onChange={this.handleTimeOptionChange} />
                      Before 4PM
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio" value="After7"
                      checked={this.state.selectedTimeOption === 'After7'}
                      onChange={this.handleTimeOptionChange} />
                      After 7PM
                    </label>
                  </div>
                </form>
              </div>
          <Button onClick={this.handleFilterSubmit}>Submit</Button>
          <Button onClick={this.handleFormReset}>Reset</Button>
        </div>
      </div>
    )
  }
}


export default FilterModal;
