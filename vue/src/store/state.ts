import Product from '@/store/types/Product';
import CartProduct from '@/store/types/CartProduct';

export type State = {
  products: Product[],
  cartProducts: CartProduct[],
  isCartOpened: boolean
}

export const state: State = {
  products: [],
  cartProducts: [],
  isCartOpened: false,
};
