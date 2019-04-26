import axios from 'axios';

const api = 'https://svc.easyhaul.com/api/v1';
const option = {
  headers: {
    'Content-Type': 'application/json'
  }
};

//for USA
export const getQuoteCalculationUSA = ({
  origin_zip,
  destination_zip,
  vin
}) => {
  return axios.get(
    `${api}/quote?type=D&origin_zip=${origin_zip}&destination_zip=${destination_zip}&vin=${vin}&drivable=true`,
    option
  )
};

//for Canada and Mexico
export const getQuoteCalculationCanada = ({ destination, origin_zip, vin }) => {
  return axios.get(
    `${api}/quote?type=B&destination=${destination}&origin_zip=${origin_zip}&vin=${vin}&drivable=true`,
    option
  );
};

//for Ocean
export const getQuoteCalculationOcean = (
  origin_zip,
  us_port,
  destination,
  vin
) => {
  return axios.get(
    `${api}/quote?type=I&origin_zip=${origin_zip}&us_port=${us_port}&destination=${destination}&vin=${vin}&drivable=true
`,
    option
  );
};
