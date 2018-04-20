function bars(state=[],action) {
    switch(action.type){
        case `FILTER_RESULTS`:
            console.log('Filtering results');
            return state;
        case 'SELECT_NEIGHBORHOOD':
            console.log('Selecting neighborhood');
            return state;
        default:
            return state;
    }
}
export default bars;