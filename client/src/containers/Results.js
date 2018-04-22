import React, { Component } from 'react'
import { connect } from 'react-redux'

class Results extends Component {
    componentDidMount(){
        if (this.props.bars === undefined ){
            this.props.selectedNeighborhood('DuPont Circle')
            this.props.fetchBars('DuPont Circle')
        }
    }
    
    render (){
        console.log(this.props.bars)
        return (
            <h1>Results</h1>
        )
    }
}

function mapStateToProps(state){
    return {
        bars: state.barsByNeighborhood[this.props.match.params.neighborhoods]
    }
}

function mapDispatchToProps (dispatch){
    return {
        selectedNeighborhood: neighborhood => dispatch(selectedNeighborhood(neighborhood)),
        fetchBars: neighborhood => dispatch(fetchBars(neighborhood))
    }
}


export default Results