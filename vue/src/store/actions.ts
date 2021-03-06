import { ActionContext, ActionTree } from 'vuex';
import ProductService from '@/store/services/ProductService';
import ActionNames from '@/store/ActionNames';
import MutationsName from '@/store/MutationsName';
import CartService from '@/store/services/CartService';
import Product from '@/store/types/Product';
import CartProduct from '@/store/types/CartProduct';
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
  [ActionNames.GetCartProducts](context: ActionAugments): void
  [ActionNames.AddToCart](context: ActionAugments, productId: string): void
  [ActionNames.IncrementQuantity](context: ActionAugments, cartProduct: CartProduct): void
  [ActionNames.DeIncrementQuantity](context: ActionAugments, cartProduct: CartProduct): void
  [ActionNames.ToggleFavorite](context: ActionAugments, productId: string): void
}

const productService = new ProductService();
const cartService = new CartService();

export const actions: ActionTree<State, State> & Actions = {
  async [ActionNames.GetProducts]({ commit }) {
    const results = await productService.getAll();
    commit(MutationsName.SetProducts, results);
  },
  async [ActionNames.GetCartProducts]({ commit }) {
    const results = await cartService.getProducts();
    commit(MutationsName.SetCartProducts, results);
  },
  async [ActionNames.AddToCart]({ state, dispatch }, productId) {
    // eslint-disable-next-line max-len
    const productToAddToCart : Product | undefined = state.products.find((product: Product) => product.id === productId);
    // eslint-disable-next-line max-len
    const productExistsInCart : CartProduct | undefined = state.cartProducts.find((cartProduct: CartProduct) => cartProduct.id === productId);

    if (productToAddToCart !== undefined) {
      const cartProduct : CartProduct = {
        id: productToAddToCart.id,
        image_url: productToAddToCart.image_url,
        price: productToAddToCart.price,
        productName: productToAddToCart.productName,
        qty: 1,
      };

      if (productExistsInCart !== undefined) {
        cartProduct.qty = productExistsInCart.qty + 1;
        await cartService.updateProduct(cartProduct);
      } else {
        await cartService.addProduct(cartProduct);
      }

      await dispatch(ActionNames.GetCartProducts);
    }
  },
  async [ActionNames.IncrementQuantity](context, cartProduct) {
    // eslint-disable-next-line max-len
    const newCartProduct = { ...cartProduct };
    newCartProduct.qty += 1;
    await cartService.updateProduct(newCartProduct);
  },
  async [ActionNames.DeIncrementQuantity](context, cartProduct) {
    // eslint-disable-next-line max-len
    const newCartProduct = { ...cartProduct };
    newCartProduct.qty -= 1;
    if (newCartProduct.qty <= 0) {
      await cartService.deleteProduct(newCartProduct.id);
    } else {
      await cartService.updateProduct(newCartProduct);
    }
  },
  async [ActionNames.ToggleFavorite]({ state, commit }, productId) {
    // eslint-disable-next-line max-len
    const productToMarkAsFavIndex : number = state.products.findIndex((product) => product.id === productId);
    const productToMarkAsFav : Product = { ...state.products[productToMarkAsFavIndex] };
    productToMarkAsFav.favorite = Number(!productToMarkAsFav.favorite);
    await productService.updateProduct(productToMarkAsFav);
    commit(MutationsName.ToggleFavorite, {
      isFav: productToMarkAsFav.favorite,
      productIndex: productToMarkAsFavIndex,
    });
  },
};
