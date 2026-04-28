import axios from "axios";

const API = axios.create({
  baseURL: "http://13.60.56.26:5000/api"
});

export default API;