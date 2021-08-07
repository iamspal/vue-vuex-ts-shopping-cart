<template>
  <header class="header bg-dark text-white">
    <div class="p-3">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-start">
          <!-- Logo !-->
          <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white
          text-decoration-none">
            <img src="../assets/img/cart.png" alt="Cart" class="header__logo">
          </a>

          <!-- Navigation !-->
          <ul class="nav col-3 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <router-link to="/" class="nav-link px-2 text-white">Home</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Cart Icon !-->
    <div class="header__cart-button d-flex flex-column align-items-center justify-content-center"
         @click="toggleCart()">
      <img src="../assets/img/shopping-cart.png" alt="Cart">
      <span class="cart__count d-flex flex-column align-items-center justify-content-center">
        0
      </span>
    </div>

    <!-- Cart sidebar !-->
    <div class="header__cart-sidebar p-2 shadow"
         :class="{'header__cart-sidebar--open': isCartOpened}">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-12">
            <div class="header__cart-sidebar__title text-black d-flex flex-row
            justify-content-between">
              <span class="h3">Cart</span>
              <div class="header__cart-sidebar__close d-flex flex-column align-items-center
              justify-content-center" @click="toggleCart()">
                <span>x</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  data() {
    return {
      isCartOpened: false as boolean,
    };
  },
  methods: {
    async toggleCart() {
      this.isCartOpened = !this.isCartOpened;
    },
  },
});
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";

.header {
  position: relative;

  &__logo {
    max-width: 40px;
    margin-right: 15px;
  }

  /* Cart button */
  &__cart-button {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    padding: 35px;
    background-color: $primary;
    user-select: none;
    cursor: pointer;

    .cart__count {
      position: absolute;
      right: 6px;
      background: white;
      color: $secondary;
      font-size: $small-font-size;
      border-radius: 100%;
      width: 20px;
      height: 20px;
      top: 4px;
      line-height: 0;
    }
  }

  /* Cart */
  &__cart-sidebar {
    position: fixed;
    top: 73px;
    background: white;
    z-index: 500 !important;
    width: 30%;
    right: -100%;
    transition: 0.3s ease-in-out;
    height: 100%;
    overflow: hidden;

    &--open {
      right: 0;
    }

    &__title {
      color: $secondary;
    }

    &__close {
      background: $secondary;
      color: white;
      font-size: $small-font-size;
      border-radius: 100%;
      width: 32px;
      height: 32px;
      line-height: 0;
      user-select: none;
      cursor: pointer;
    }
  }
}
</style>
