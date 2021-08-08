<template>
  <div class="cart-product d-flex flex-column justify-content-between" v-if="cartProducts.length">
    <div v-for="cartProduct in cartProducts"
         v-bind:key="cartProduct.id"
         class="mb-3">
      <div class="row">
        <div class="col-2 col-sm-3">
          <img :src="cartProduct.image_url" :alt="cartProduct.productName"
               class="img-fluid img-thumbnail cart-product__img">
        </div>

        <div class="col-6 col-sm-7">
          <div class="d-flex flex-column justify-content-between">
            <p class="text-black fw-bold">{{cartProduct.productName}}</p>

            <div class="cart-product__quantity input-group input-group-sm mb-3 d-flex flex-row
                    flex-nowrap align-items-center justify-content-start">
              <button class="btn" @click="deIncrementQuantity(cartProduct)">-</button>
              <p class="text-black m-0 p-0">{{cartProduct.qty}}</p>
              <button class="btn" @click="incrementQuantity(cartProduct)">+</button>
            </div>
          </div>
        </div>

        <div class="col-4 col-sm-2 align-self-center text-end">
          <p class="fw-bold text-primary">{{$filters.formatPrice(cartProduct.price)}}</p>
        </div>
      </div>
    </div>

    <div class="row mt-5 border-top border-bottom pb-3 pt-3">
      <div class="col-8">
        <p class="h5 text-black mb-0">Total Amount</p>
      </div>

      <div class="col-4 text-end">
        <p class="fw-bold text-primary text-black mb-0">
          {{$filters.formatPrice(totalAmount)}}
        </p>
      </div>
    </div>
  </div>

  <div v-else class="d-flex flex-column justify-content-center align-items-center">
    <p class="text-dark">Your cart is empty :(</p>
    <router-link to="/" class="btn btn-primary d-md-none">Go back to the homepage</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CartProduct from '@/store/types/CartProduct';
import ActionNames from '@/store/ActionNames';

export default defineComponent({
  name: 'CartProducts',
  computed: {
    cartProducts(): CartProduct [] {
      return this.$store.state.cartProducts;
    },
    totalAmount() : number {
      return this.$store.getters.totalAmount;
    },
  },
  methods: {
    async deIncrementQuantity(cartProduct: CartProduct) {
      await this.$store.dispatch(ActionNames.DeIncrementQuantity, cartProduct);
      await this.$store.dispatch(ActionNames.GetCartProducts);
    },
    async incrementQuantity(cartProduct: CartProduct) {
      await this.$store.dispatch(ActionNames.IncrementQuantity, cartProduct);
      await this.$store.dispatch(ActionNames.GetCartProducts);
    },
  },
});
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins/breakpoints";
.cart-product {
  &__img {
    width: 100%;

    @include media-breakpoint-up(md) {
      max-width: 110px;
    }
  }
  &__quantity {
    border: 1px solid $secondary;
    width: 100px;
   .btn {
     width: 50px;
   }
  }
}
</style>
