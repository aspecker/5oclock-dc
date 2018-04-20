export function selectHood(neighborhood){
    console.log('dispatching select hood');
    return {
        type: 'SELECT_NEIGHBORHOOD',
        neighborhood
    }
}

export function filterResults(options){
    console.log('dispatching filter results');
    return {
        type: 'FILTER RESULTS',
        options
    }
}