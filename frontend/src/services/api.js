import axios from "axios";

const API = axios.create({
  baseURL: "https://restaurant-reservation-system-jmm5.onrender.com"
});

export default API;