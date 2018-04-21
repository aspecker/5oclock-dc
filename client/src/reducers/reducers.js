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

function examinedBar(state={}, action){
    switch (action.type){
        case EXAMINE_BAR:
            return 
    }
}

function bars(
    state={
        isFetching: false,
        items: []
    },
    action
    ){
    switch (action.type){
        case REQUEST_BARS:
            return {...state, isFetching: true}
        case RECEIVE_BARS:
            return { ...state,
                isFetching: false,
                items: action.bars
            }
        default: 
            return state;
    }
}

function barsByNeighborhood(state={},action){
    switch (action.type){
        case REQUEST_BARS:
        case RECEIVE_BARS:
            return Object.assign({},state,{
                [action.neighborhood]: bars(state[action.neighborhood],action)
            })
            default:
                return state
    }
}

const rootReducer = combineReducers({
    selectedNeighborhood,
    examinedBar,
    barsByNeighborhood
})

export default rootReducer