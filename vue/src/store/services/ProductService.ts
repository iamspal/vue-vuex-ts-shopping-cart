import Product from '@/store/types/Product';
import Service from '@/store/services/Service';

export default class ProductService extends Service {
  constructor() {
    super();
    this.apiEndPoint += `${process.env.VUE_APP_API_ENDPOINT_GROCERY}`;
  }

  async getAll() : Promise<Product[]> {
    const result = await this.get(this.apiEndPoint);
    return result.data;
  }

  async updateProduct(product: Product) : Promise<void> {
    await this.put(`${this.apiEndPoint}${product.id}`, product);
  }
}
