import axios from "axios";

export const loginQuery = (request) =>
  axios.post("https://reqres.in/api/login", request.payload);
