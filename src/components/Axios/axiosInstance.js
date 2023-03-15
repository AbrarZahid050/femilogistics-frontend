import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.PORT || "https://femilogistics-37754.botics.co/",

  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
