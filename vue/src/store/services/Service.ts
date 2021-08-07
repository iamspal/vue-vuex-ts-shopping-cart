import axios from 'axios';

export default class Service {
  public apiEndPoint: string;

  constructor() {
    this.apiEndPoint = process.env.VUE_APP_API_ENDPOINT;
  }

  // eslint-disable-next-line class-methods-use-this
  get(url: string) {
    return axios.get(url);
  }
}
