import Product from '@/store/types/Product';
import axios from 'axios';

export default class ProductService {
  public productServiceEndpoint:string;

  constructor() {
    this.productServiceEndpoint = `${process.env.VUE_APP_API_ENDPOINT}${process.env.VUE_APP_API_ENDPOINT_GROCERY}`;
  }

  async getAll() : Promise<Product[]> {
    const result = await axios.get(this.productServiceEndpoint);
    return result.data;
  }
}
