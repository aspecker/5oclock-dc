import { combineReducers} from 'redux';
import {
    REQUEST_BARS,
    RECEIVE_BARS,
    EXAMINE_BAR,
    SELECT_NEIGHBORHOOD
} from '../actions'

function selectedNeighborhood(state='No neighborhood selected yet!',action){
    switch (action.type){
        case SELECT_NEIGHBORHOOD:
            return action.neighborhood
        default:
            return state
    }
}

function bars(
    state={
        isFetching: false,
        bars: []
    },
    action
    ){
    switch (action.type){
        case REQUEST_BARS:
            return {...state, isFetching: true}
        case RECEIVE_BARS:
            return { ...state,
                isFetching: false,
                bars: action.bars
            }
        default: 
            return state;
    }
}

function examinedBar(state={}, action){
    switch (action.type){
        case EXAMINE_BAR:
            return 
    }
}