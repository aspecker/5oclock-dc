import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    selectNeighborhood,
    fetchBars,
    examineBar
} from '../actions/actions';
import Dropdown from '../components/Search/NeighborhoodDropDown';

class App extends Component {
    handleChange = (e)=>{
        this.props.selectedNeighborhood(e.target.value)
        this.props.fetchBars(e.target.value)
        this.props.history.push(`/neighborhood/${e.target.value}`)
    }
    // if page is rendering before results are displayed
    // add promise or async await

    render() {
        <Dropdown onChange={this.handleChange}/>
    }

}

function mapDispatchToProps (dispatch) {
    return {
        selectedNeighborhood: neighborhood => dispatch(selectedNeighborhood(neighborhood)),
        fetchBars: neighborhood => dispatch(fetchBars(neighborhood))
    }
}



export default connect(null,mapDispatchToProps)(App);