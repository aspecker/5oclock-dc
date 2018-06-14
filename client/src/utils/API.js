import axios from 'axios';
import yelp from 'yelp-fusion';

// The getRecipes method retrieves recipes from the server
// It accepts a 'query' or term to search the recipe api for
export default {
  // authentication

  signUp(obj) {
    return axios.post('/api/user/signup', obj);
  },
  logIn(obj) {
    return axios.post('/api/user/login', obj);
  },
  logOut() {
    return axios.get('/logout');
  },
  currentUser() {
    return axios.get('api/user/current');
  },
  // bars
  barFindOne(id) {
    return axios.get(`/api/bars/${id}`);
  },
  barFindAll() {
    return axios.get('/api/bars/data');
  },
  barNew(obj) {
    return axios.post('/api/bars/new', obj);
  },
  barUpdate(id, obj) {
    return axios.put(`/api/bars/${id}`, obj);
  },
  // queries
  queryNeighborhood(query) {
    return axios.get(`/api/neighborhood/${query}`);
  },
  queryFilters(neighborhood, price, cuisine) {
    return axios.get(`/api/query/${neighborhood}/${price}/${cuisine}`);
  },
  yelpInfo(bar){
    return ()
  }
};
