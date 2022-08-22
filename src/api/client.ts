import axios from "axios";
import applyCaseMiddleware from "axios-case-converter";

const options = {
  ignoreHeaders: true,
};

const client = applyCaseMiddleware(
  axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    withCredentials: true, // リクエストにCookieの付与を許可
  }),
  options
);

export default client;
