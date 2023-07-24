import axios from 'axios';
import { AppConstants } from '../../../constants';

const AxiosInstance = axios.create({
  baseURL: AppConstants.baseURL,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  }
});

AxiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default AxiosInstance;
