import React, { Component } from "react";
import "./FilterModal.css";
import { Button } from "../../Components/Search";

class FilterModal extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(this.state);
  }

  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
    console.log(this.state);
  }

  handlePriceOptionChange = changeEvent => {
    this.setState({
      selectedPriceOption: changeEvent.target.value
    });
    console.log(this.state);
  };
  handleDrinkOptionChange = changeEvent => {
    this.setState({
      selectedDrinkOption: changeEvent.target.value
    });
    console.log(this.state);
  };
  handleTimeOptionChange = changeEvent => {
    this.setState({
      selectedTimeOption: changeEvent.target.value
    });
    console.log(this.state);
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    console.log;

    console.log(`You have selected: ${this.state.selectedPriceOption}.`);
    console.log(`You have selected: ${this.state.selectedDrinkOption}.`);
    console.log(`You have selected: ${this.state.selectedTimeOption}.`);
  };

  handleFilterSubmit = event => {
    event.preventDefault();

    // code to filter data and route user to results page with new params
  };

  handleFormReset = event => {
    event.preventDefault();
    // code to clear all search fields goes here
  };

  render() {
    return (
      <div className="filter-modal">
        <div className="filter-modal-container">
          <div className="modal-content">
            <h3>Narrow Your Search</h3>
            <p>* All fields are optional</p>
            <div className="price-radio">
              <h4 className="filter-item">Price:</h4>
              <form
              // onSubmit={this.handleFormSubmit}
              >
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="$"
                      checked={this.state.selectedPriceOption === "$"}
                      onChange={this.handlePriceOptionChange}
                    />
                    $
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="$$"
                      checked={this.state.selectedPriceOption === "$$"}
                      onChange={this.handlePriceOptionChange}
                    />
                    $$
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="$$$"
                      checked={this.state.selectedPriceOption === "$$$"}
                      onChange={this.handlePriceOptionChange}
                    />
                    $$$
                  </label>
                </div>
              </form>
            </div>
            {/* <Dropdown>
              {this.state.cuisineArr} Choose your cuisine type...
            </Dropdown> */}
            <div className="form-group form-cuisine">
              <label htmlFor="cuisine"> Cuisine Style</label>
              <select
                name="cuisine"
                className="submitSelect"
                onChange={this.handleInputChange}
                value={this.state.cuisine}
              >
                <option defaultValue>Choose a Cuisine Type</option>
                <option value="Fusion">Asian Fusion</option>
                <option value="Caribbean">Caribbean</option>
                <option value="Chinese">Chinese</option>
                <option value="Ethiopian">Ethiopian</option>
                <option value="European">European</option>
                <option value="French">French</option>
                <option value="German">German</option>
                <option value="Indian">Indian</option>
                <option value="Irish">Irish</option>
                <option value="Italian">Italian</option>
                <option value="Japanese">Japanese</option>
                <option value="Korean">Korean</option>
                <option value="Mediterranean">Mediterranean</option>
                <option value="Mexican">Mexican</option>
                <option value="Pub">Pub Fare</option>
                <option value="Tapas">Tapas</option>
                <option value="Thai">Thai Food</option>
                <option value="Seafood">Seafood</option>
                <option value="Soul">Soul Food</option>
                <option value="Sushi">Sushi</option>
              </select>
            </div>
            <div className="booze-radio">
              <h4 className="filter-item">Drink Type:</h4>
              <form
              //  onSubmit={this.handleFormSubmit}
              >
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="Beer"
                      checked={this.state.selectedDrinkOption === "Beer"}
                      onChange={this.handleDrinkOptionChange}
                    />
                    Beer
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="Wine"
                      checked={this.state.selectedDrinkOption === "Wine"}
                      onChange={this.handleDrinkOptionChange}
                    />
                    Wine
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="Cocktail"
                      checked={this.state.selectedDrinkOption === "Cocktail"}
                      onChange={this.handleDrinkOptionChange}
                    />
                    Cocktail
                  </label>
                </div>
              </form>
            </div>
            <div className="time-radio">
              <h4 className="filter-item">Hours:</h4>
              <form
              // onSubmit={this.handleFormSubmit}
              >
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="Before4"
                      checked={this.state.selectedTimeOption === "Before4"}
                      onChange={this.handleTimeOptionChange}
                    />
                    Before 4PM
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="After7"
                      checked={this.state.selectedTimeOption === "After7"}
                      onChange={this.handleTimeOptionChange}
                    />
                    After 7PM
                  </label>
                </div>
              </form>
            </div>
            <Button handleClick={this.handleFormSubmit}>Submit</Button>
            <Button onClick={this.handleFormReset}>Reset</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterModal;
