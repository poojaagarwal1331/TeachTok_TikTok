import { AxiosRequestConfig } from 'axios';
import { ApiCallProps } from './types';
import AxiosInstance from './InterceptorCall';
import { AppConstants } from '../../../constants';

export const getRequest = async ({ url = '' }: ApiCallProps) => {
  const config = {
    baseURl: AppConstants.baseURL,
    url: url
  } as AxiosRequestConfig;

  return AxiosInstance.get(url, config);
};
