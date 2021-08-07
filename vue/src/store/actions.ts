import { ActionContext, ActionTree } from 'vuex';
import ProductService from '@/store/services/ProductService';
import ActionNames from '@/store/ActionNames';
import MutationsName from '@/store/MutationsName';
import { Mutations } from './mutations';
import { State } from './state';

type ActionAugments = Omit<ActionContext<State, State>, 'commit'> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
}

export type Actions = {
  [ActionNames.GetProducts](context: ActionAugments): void
}

const productService = new ProductService();

export const actions: ActionTree<State, State> & Actions = {
  async [ActionNames.GetProducts]({ commit }) {
    const results = await productService.getAll();
    commit(MutationsName.SetProducts, results);
  },
};
