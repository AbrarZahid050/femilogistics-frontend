import axios from "axios";
import Cookies from "js-cookie";

const authInterceptor = axios.create({
  baseURL: process.env.PORT || "https://femilogistics-37754.botics.co/",
});

authInterceptor.interceptors.request.use(
  (request) => {
    const token = Cookies.get("accessToken");
    console.log(`token: ${token}`);
    request.headers.Authorization = `Bearer ${token}`;
    return request;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default authInterceptor;
