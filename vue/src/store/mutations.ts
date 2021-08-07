import { MutationTree } from 'vuex';
import MutationsNameTypes from '@/store/MutationsName';
import Product from '@/store/types/Product';
import { State } from './state';

export type Mutations = {
  [MutationsNameTypes.SetProducts](state: State, products: Product[]): void
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationsNameTypes.SetProducts](state, products) {
    state.products = products;
  },
};
