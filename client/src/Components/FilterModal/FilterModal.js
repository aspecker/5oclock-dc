import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollLock from "react-scrolllock";
import "./FilterModal.css";
import { Button } from "../../Components/Search";

const buttonStyle = {
  height: "40px",
  width: "120px",
  marginTop: "30px",
  marginLeft: "20px",
  marginRight: "20px"
};

class FilterModal extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {
      neighborhood: this.props.neighborhood,
      selectedPriceOption: "null",
      selectedCuisineOption: "null",
      selectedDrinkOption: "null",
      selectedTimeOption: "null"
    };

    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // commenting out because this does not seem to be doing anything
  // handleChange(event) {
  //   this.setState({ value: event.target.value });
  //   console.log(this.state);
  // }

  handleSubmit(event) {
    // might use this later down the line
    event.preventDefault();
  }
  handleCuisineOptionChange = changeEvent => {
    this.setState({
      selectedCuisineOption: changeEvent.target.value
    });
  };

  handlePriceOptionChange = changeEvent => {
    this.setState({
      selectedPriceOption: changeEvent.target.value
    });
  };

  handleDrinkOptionChange = changeEvent => {
    this.setState({
      selectedDrinkOption: changeEvent.target.value
    });
  };

  handleTimeOptionChange = changeEvent => {
    this.setState({
      selectedTimeOption: changeEvent.target.value
    });
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    this.props.filterAPI(
      this.state.neighborhood,
      this.state.selectedPriceOption,
      this.state.selectedCuisineOption
    );
  };

  handleFilterSubmit = event => {
    event.preventDefault();

    // code to filter data and route user to results page with new params
  };

  handleFormReset = event => {
    event.preventDefault();
    // this.setState({
    //   selectedCuisineOption: "null",
    //   selectedPriceOption: "null",
    //   selectedDrinkOption: "null",
    //   selectedTimeOption: "null"
    // });
    // this.props.toggle();

    window.location.reload();
    // slapdash solution that works for now. Will use a better one in the future
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="filter-modal">
        <button className="closeBtn" onClick={this.props.onClose}>
          X
        </button>
        <div className="filter-modal-container">
          <div className="modal-content">
            <h3>Narrow Your Search</h3>
            <p className="optional">* All fields are optional</p>
            {/* filter by price */}
            <div className="price-radio">
              <h4 className="filter-item">Price:</h4>
              <form>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="1"
                      checked={this.state.selectedPriceOption === "1"}
                      onChange={this.handlePriceOptionChange}
                    />
                    $
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="2"
                      checked={this.state.selectedPriceOption === "2"}
                      onChange={this.handlePriceOptionChange}
                    />
                    $$
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="3"
                      checked={this.state.selectedPriceOption === "3"}
                      onChange={this.handlePriceOptionChange}
                    />
                    $$$
                  </label>
                </div>
              </form>
            </div>
            {/* filter by Cuisine */}
            <div className="form-group form-cuisine modalCuisine">
              <label className="cuisineLabel" htmlFor="cuisine">
                {" "}
                Cuisine Style:
              </label>
              <select
                name="cuisine"
                className="submitSelect cuisineSelect modalSelect"
                onChange={this.handleCuisineOptionChange}
                value={this.state.cuisine}
              >
                {this.state.selectedCuisineOption === "null" ? (
                  <option defaultValue>Choose a Cuisine Type</option>
                ) : (
                  <option defaultValue>
                    {this.state.selectedCuisineOption}
                  </option>
                )}
                {/* <option value="Fusion">Asian Fusion</option>
                <option value="Caribbean">Caribbean</option>
                <option value="Chinese">Chinese</option>
                <option value="Ethiopian">Ethiopian</option> */}
                <option value="European">European</option>
                <option value="French">French</option>
                {/* <option value="German">German</option> */}
                <option value="Indian">Indian</option>
                <option value="Irish">Irish</option>
                <option value="Italian">Italian</option>
                <option value="Japanese">Japanese</option>
                {/* <option value="Korean">Korean</option> */}
                <option value="Mediterranean">Mediterranean</option>
                <option value="Mexican">Mexican</option>
                <option value="Pub Fare">Pub Fare</option>
                <option value="Tapas">Tapas</option>
                <option value="Thai">Thai Food</option>
                <option value="Seafood">Seafood</option>
                <option value="Southern">Southern</option>
                <option value="Sushi">Sushi</option>
              </select>
            </div>
            {/* filter by drink type */}
            {/* Not currently in Database */}
            {/* ***** */}
            {/* <div className="booze-radio">
              <h4 className="filter-item">Drink Type:</h4>
              <form>
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
            </div> */}
            {/* filter by time */}
            {/* Working on solution */}
            {/* ***** */}
            {/* <div className="time-radio">
              <h4 className="filter-item">Hours:</h4>
              <form>
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
            </div> */}
            <div className="buttonDiv">
              <Button style={buttonStyle} handleClick={this.handleFormSubmit}>
                Submit
              </Button>

              {/* <Link to={`/results/${this.props.neighborhood}`}> */}
              <Button style={buttonStyle} handleClick={this.handleFormReset}>
                {" "}
                Reset
              </Button>
              {/* </Link> */}
            </div>
          </div>
        </div>
        <ScrollLock />
      </div>
    );
  }
}

export default FilterModal;
