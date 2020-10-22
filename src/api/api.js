import axios from 'axios';
import appConfig from '../constants/AppConfig';

const POST = (url, params) => {
  var config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return axios.post(`${appConfig.serverURL}${url}`, params, config);
};

const PATCH = (url, params) => {
  return axios.patch(`${appConfig.serverURL}${url}`, params);
};

const PUT = (url, params) => {
  var config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return axios.put(`${appConfig.serverURL}${url}`, params, config);
};
const GET = (url, params) => {
  var config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return axios.get(`${appConfig.serverURL}${url}?${dictToURI(params)}`, config);
};

const dictToURI = (dict) => {
  var str = [];
  for (var p in dict) {
    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(dict[p]));
  }
  return str.join("&");
};

export default {
  POST,
  PATCH,
  GET,
  PUT,
};