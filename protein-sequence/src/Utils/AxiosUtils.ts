import { AxiosResponse, AxiosRequestConfig } from 'axios';

export const okResponse = <T>(data: T, headers: unknown = {}): AxiosResponse<T> => {
  return axiosResponse(200, 'OK', data, headers);
};

export const axiosResponse = <T>(
  status: number,
  statusText: string,
  data: T,
  headers: any = {},
  config: AxiosRequestConfig = {}): AxiosResponse<T> => {
  return {
    data,
    status,
    statusText,
    headers,
    config
  };
};