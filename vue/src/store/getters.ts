import { GetterTree } from 'vuex';
import Product from '@/store/types/Product';
import { State } from './state';

export type Getters = {
  products(state: State): Product[]
}

export const getters: GetterTree<State, State> & Getters = {
  products(state) {
    return state.products;
  },
};
