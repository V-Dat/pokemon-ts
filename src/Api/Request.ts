import axios from "axios";
import CONFIG from "../config/enviroment";
import { LOCALSTORAGE_ITEM } from "../app/constant";

const headerOptions: any = (isRefreshToken: boolean) => {
  const token = localStorage.getItem(LOCALSTORAGE_ITEM.ACCESS_TOKEN);
  if (!isRefreshToken && token) {
    return {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "true",
    };
  } else {
    return {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "true",
    };
  }
};

export default function request(
  url: string,
  options: any,
  isRefreshToken = false
) {
  const tokenExpried: any = localStorage.getItem(
    LOCALSTORAGE_ITEM.TOKEN_EXPRIED
  );
  return axios({ ...options, url: url })
    .then((response: any) => {
      if (JSON.parse(tokenExpried)) {
        localStorage.removeItem(LOCALSTORAGE_ITEM.TOKEN_EXPRIED);
      }
      return response;
    })
    .catch((error) => {
      //handle error later
    });
}

export function get(url: string) {
  const fullUrl = CONFIG.API_ENDPOINT + url;
  const headers = headerOptions();
  const options = {
    method: "GET",
    headers: headers,
    credentials: "include",
  };
  return request(fullUrl, options);
}

export function post(url: string, bodyData: any, isRefreshToken = false) {
  const fullUrl = CONFIG.API_ENDPOINT + url;
  const headers = headerOptions(isRefreshToken);
  const options = {
    method: "POST",
    headers: headers,
    credentials: "include",
    data: bodyData,
  };

  return request(fullUrl, options, isRefreshToken);
}

export function put(url: string, bodyData: any) {
  const fullUrl = CONFIG.API_ENDPOINT + url;
  const headers = headerOptions();
  const options = {
    method: "PUT",
    headers: headers,
    credentials: "include",
    data: bodyData,
  };

  return request(fullUrl, options);
}

export function patch(url: string, bodyData: any) {
  const fullUrl = CONFIG.API_ENDPOINT + url;
  const headers = headerOptions();
  const options = {
    method: "PATCH",
    headers: headers,
    credentials: "include",
    data: bodyData,
  };

  return request(fullUrl, options);
}

export function del(url: string) {
  const fullUrl = CONFIG.API_ENDPOINT + url;
  const headers = headerOptions();
  const options = {
    method: "DELETE",
    headers: headers,
    credentials: "include",
  };

  return request(fullUrl, options);
}
