import axios, { AxiosResponse } from 'axios';

export default class Service {
  public apiEndPoint: string;

  constructor() {
    this.apiEndPoint = process.env.VUE_APP_API_ENDPOINT;
  }

  // eslint-disable-next-line class-methods-use-this
  protected get(url: string) : Promise<AxiosResponse> {
    return axios.get(url);
  }

  // eslint-disable-next-line class-methods-use-this
  protected post<Type>(url: string, data: Type) : Promise<AxiosResponse> {
    return axios.post(url, data);
  }

  // eslint-disable-next-line class-methods-use-this
  protected put<Type>(url: string, data: Type) : Promise<AxiosResponse> {
    return axios.put(url, data);
  }

  // eslint-disable-next-line class-methods-use-this
  protected delete(url: string) : Promise<AxiosResponse> {
    return axios.delete(url);
  }
}
