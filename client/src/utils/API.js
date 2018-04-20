import axios from "axios";

export default {
  //authentication
  signUp: function(obj) {
    return axios.post("/api/user/signup", obj);
  },
  logIn: function(obj){
    return axios.post("/api/user/login", obj);
  },
  logOut: function(){
    return axios.get("/logout");
  },
  currentUser: function(){
    return axios.get("api/user/current");
  },
  //bars
  barFindOne: function(id){
    return axios.get(`/api/bars/${id}`);
  },
  barFindAll: function(){
    return axios.get("/api/bars/data");
  },
  barNew: function(obj){
    return axios.post("/api/bars/new", obj);
  },
  barUpdate: function(id, obj){
    return axios.put(`/api/bars/${id}`, obj)
  }


};
