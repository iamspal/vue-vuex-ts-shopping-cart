<template>
  <div class="cart-product">
    <div v-for="cartProduct in cartProducts" v-bind:key="cartProduct.id" class="mb-3">
      <div class="row">
        <div class="col-3">
          <img :src="cartProduct.image_url" :alt="cartProduct.productName"
               class="img-fluid img-thumbnail cart-product__img">
        </div>

        <div class="col-7">
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

        <div class="col-2 align-self-center">
          <p class="fw-bold text-primary">{{$filters.formatPrice(cartProduct.price)}}</p>
        </div>
      </div>
    </div>
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
  },
  methods: {
    deIncrementQuantity(cartProduct: CartProduct) {
      this.$store.dispatch(ActionNames.DeIncrementQuantity, cartProduct);
    },
    incrementQuantity(cartProduct: CartProduct) {
      this.$store.dispatch(ActionNames.IncrementQuantity, cartProduct);
    },
  },
});
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
.cart-product {
  &__img {
    max-width: 110px;
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
