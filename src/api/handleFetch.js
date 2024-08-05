import axios from 'axios';
import Cookies from 'js-cookie';

import endpoints from './endpoints';
import { logger } from '../utilities/general';
import errorHandler from '../utilities/errorHandler';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const handleFetch = async ({
  endpoint = '', extra = null, method = 'GET', auth = false,
  body = null, pQuery = null, param = null, multipart = false,
  responseType = null
} = {}) => {
  const headers = {
    'Content-Type': multipart ? 'multipart/form-data' : 'application/json',
    env: 'monieworx'
  };
  let url = endpoints[endpoint] || endpoint;

  if (extra) {
    url += `${extra}`;
  }

  if (param) {
    url += `/${param}`;
  }

  if (pQuery) {
    let paramsArray = Object.keys(pQuery)
      .map((key) => pQuery[key] && `${encodeURIComponent(key)}=${encodeURIComponent(pQuery[key])}`);

    paramsArray = paramsArray.filter((item) => item);
    url += `?${paramsArray.join('&')}`;
  }

  if (auth) {
    const data = Cookies.get('data') && JSON.parse(Cookies.get('data'));
    headers.Authorization = `Bearer ${data?.token}`;
  }

  const options = {
    url, method, headers
  };

  if (responseType) {
    options.responseType = responseType;
  }

  if (body) {
    options.data = body;
  }

  logger(options);
  return axios(options)
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(errorHandler(error, auth));
    });
};

export default handleFetch;
