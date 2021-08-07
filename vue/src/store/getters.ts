import { GetterTree } from 'vuex';
import { State } from './state';

export type Getters = {
  totalAmount(state: State): number
}

export const getters: GetterTree<State, State> & Getters = {
  totalAmount(state) {
    if (state.cartProducts.length) {
      // eslint-disable-next-line max-len
      return state.cartProducts.map((cartProductPrev) => cartProductPrev.price).reduce((totalPrev, totalNext) => totalPrev + totalNext);
    }
    return 0;
  },
};
