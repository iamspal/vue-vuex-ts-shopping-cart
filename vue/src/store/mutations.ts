import { MutationTree } from 'vuex';
import MutationsNameTypes from '@/store/MutationsName';
import Product from '@/store/types/Product';
import CartProduct from '@/store/types/CartProduct';
import { State } from './state';

export type Mutations = {
  [MutationsNameTypes.SetProducts](state: State, products: Product[]): void
  [MutationsNameTypes.SetCartProducts](state: State, products: CartProduct[]): void
  [MutationsNameTypes.SetCartOpened](state: State, cartOpened: boolean): void
  [MutationsNameTypes.ToggleFavorite](state: State, payload : {
    isFav : number, productIndex: number }): void
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationsNameTypes.SetProducts](state, products) {
    state.products = products;
  },
  [MutationsNameTypes.SetCartProducts](state, products) {
    state.cartProducts = products;
  },
  [MutationsNameTypes.SetCartOpened](state, isCartOpened) {
    state.isCartOpened = isCartOpened;
  },
  [MutationsNameTypes.ToggleFavorite](state, payload) {
    state.products[payload.productIndex].favorite = payload.isFav;
  },
};
