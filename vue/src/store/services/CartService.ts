import CartProduct from '@/store/types/CartProduct';
import Service from '@/store/services/Service';

export default class CartService extends Service {
  constructor() {
    super();
    this.apiEndPoint += `${process.env.VUE_APP_API_ENDPOINT_CART}`;
  }

  async getProducts() : Promise<CartProduct[]> {
    const result = await this.get(this.apiEndPoint);
    return result.data;
  }

  async addProduct(cartProduct: CartProduct) : Promise<void> {
    await this.post(this.apiEndPoint, cartProduct);
  }

  async updateProduct(cartProduct: CartProduct) {
    await this.put(`${this.apiEndPoint}${cartProduct.id}`, cartProduct);
  }
}
