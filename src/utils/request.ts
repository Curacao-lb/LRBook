import axios, { AxiosInstance, AxiosResponse } from "axios";
import apis from '@src/api'

const instance: AxiosInstance = axios.create({
  baseURL: 'http://192.168.110.24:7002/',
  timeout: 10 * 1000,
})

/**
 * 对返回体拦截进行错误信息分类
 */
instance.interceptors.response.use(
  response => response,
  error => {
    const { response } = error;
    if (response) {
      const { status } = response;
      if (status >= 500) {
        // 服务端报错
      } else if (status === 400) {
        // 接口参数异常
      } else if (status === 401) {
        // 登陆信息过期，需要重新登陆
      } else {
        // 其它错误类型，统一按照接口报错处理
      }
    } else {
      // 网络异常
    }
    return Promise.reject(error);
  }
);

export const get = (url: string, params?: any): Promise<AxiosResponse<any, any>> => {
  return instance.get(url, { params })
}

export const post = (url: string, params?: any): Promise<AxiosResponse<any, any>> => {
  return instance.post(url, { params })
}

export const request = (name: string, params: any): Promise<AxiosResponse<any, any>> => {
  const api = (apis as any)[name];
  const { url, method } = api;
  if (method === 'get') {
    return get(url, params);
  } else {
    return post(url, params);
  }
}


