import axios from "axios";

export function userSignInRequest(userData){
  return dispatch => {
    return axios.post("/api/authenticate", userData);
  }
}
