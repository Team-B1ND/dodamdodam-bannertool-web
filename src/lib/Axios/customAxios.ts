import axios from "axios";
import Cookie from "../storage/Cookie";
import config from "../../config/config.json";
import { requestInterceptor } from "./requestInterceptor";
import { responseErrorInterceptor } from "./responseInterceptor";
import {
  ACCESS_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "../../constants/Token/Token.constant";

export const customAxios = axios.create({
  baseURL: config.DODAM_SERVER_V6,
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${Cookie.get(ACCESS_TOKEN_KEY)}`,
  },
});

customAxios.interceptors.request.use(requestInterceptor);

customAxios.interceptors.response.use(
  (config) => config,
  responseErrorInterceptor
);
