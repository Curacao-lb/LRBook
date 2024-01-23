import axios, { AxiosInstance, AxiosResponse } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: 'http://192.168.110.24:7001/',
  timeout: 10 * 1000,
})

export const get = (url: string, params?: any): Promise<AxiosResponse<any, any>> => {
  return instance.get(url, { params })
}

export const post = (url: string, params?: any): Promise<AxiosResponse<any, any>> => {
  return instance.post(url, { params })
}