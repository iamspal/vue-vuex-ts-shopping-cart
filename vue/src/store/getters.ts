import { GetterTree } from 'vuex';
import { State } from './state';

export type Getters = {
  totalAmount(state: State): number
}

export const getters: GetterTree<State, State> & Getters = {
  totalAmount(state) {
    if (state.cartProducts.length) {
      return state.cartProducts.map((cartProduct) => cartProduct.price * cartProduct.qty)
        .reduce((totalPrev, totalNext) => totalPrev + totalNext);
    }
    return 0;
  },
};
