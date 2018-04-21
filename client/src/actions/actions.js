import fetch from 'cross-fetch';

// 
export const REQUEST_BARS = 'REQUEST_BARS';
export const RECEIVE_BARS = 'RECEIVE_BARS';
// export const REQUEST_ONE_BAR = 'REQUEST_ONE_BAR';
// export const RECEIVE_ONE_BAR = 'RECEIVE_ONE_BAR';
export const SELECT_NEIGHBORHOOD = 'SELECT_NEIGHBORHOOD';
export const EXAMINE_BAR = 'EXAMINE_BAR';

//action to select a neighborhood with the dropdown menu
export function selectNeighborhood(neighborhood){
    return {
        type : SELECT_NEIGHBORHOOD,
        neighborhood
    }
}

// action to display more information about a bar
export function examineBar(barObj){
    return {
        type: EXAMINE_BAR,
        barObj
    }
}

// action to get the bars from our database
function requestBars(neighborhood){
    return {
        type: REQUEST_BARS,
        neighborhood
    }
}

// action to receive the bars from the database
// NEEDS TO BE CONFIG'D FOR OUR DB RESPONSE
function receiveBars(neighborhood,json){
    return{
        type: RECEIVE_BARS,
        neighborhood,
        bars: json.data.children.map(child=>child.data)
        // this may need to be formatted to how the response will come back from the db
    }
}

// function to actually get the bars from the database
// NEEDS TO BE CONFIG'D FOR OUR DB ROUTE AND RESPONSE
function fetchBars(neighborhood){
    return dispatch => {
        dispatch(requestBars(neighborhood))
        return fetch('dummy url for request route')
        //needs to be configured for our api route
        .then(response =>response.json())
        .then(json=>dipsatch(receiveBars))
    }
}


