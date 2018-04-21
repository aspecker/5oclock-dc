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
    constructor(props){
        super (props)
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }


}



export default App