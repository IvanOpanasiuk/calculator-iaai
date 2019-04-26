import axios from 'axios';

const api = 'https://svc.easyhaul.com/api/v1';
const option = {
  headers: {
    'Content-Type': 'application/json'
  }
};

export const getGeoAutodetection = () => {
  return axios.get(`${api}/geo/detect`, option);
};

export const getGeolocation = (lat, lon) => {
  return axios.get(`${api}/geolocation?latitude=${lat}&longitude=${lon}`, option);
};

export const getListOfCountry = () => {
  return axios.get(`${api}/destination-country`, option);
};

export const getCityByZip = (zip) => {
  return axios.get(`${api}/zip/${zip}`, option);
};

export const getListUSPorts = (id, latitude, longitude) => {
  return axios.get(`${api}/destination/${id}/port?lat=${latitude}&lon=${longitude}`, option);
};

export const getListDestinationsPort = (id) => {
  return axios.get(`${api}/destination?country=${id}`, option);
};
