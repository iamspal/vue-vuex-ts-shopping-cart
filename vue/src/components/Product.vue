<template>
  <div class="product shadow">
    <img :src="img" :alt="name" class="product__img" loading="lazy"/>
    <img src="../assets/img/heart.png" alt="Heart" class="product__fav"
         @click="$emit('toggle-favorite',id)" v-if="fav"/>
    <img src="../assets/img/like.png" alt="Heart" class="product__fav"
         @click="$emit('toggle-favorite',id)" v-else/>
    <div class="p-3">
      <div class="d-flex flex-row justify-content-between flex-wrap flex-md-nowrap">
        <p class="product__name">{{name}}</p>
        <p class="fw-bold text-primary">{{$filters.formatPrice(price)}}</p>
      </div>

      <p class="d-none d-md-block">
        {{$filters.limitCharacters(description,descriptionMaxLength)}}...
      </p>
      <div class="d-flex flex-row justify-content-between align-items-start flex-wrap">
        <p class="product__stock d-none d-md-block">{{stock}} left</p>

        <button class="btn btn-sm btn-primary text-uppercase" :disabled="stock <= 0"
                @click="$emit('add-to-cart',id)">+ Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Product',
  props: {
    id: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    img: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
    price: {
      required: true,
      type: Number,
    },
    stock: {
      required: true,
      type: Number,
    },
    fav: {
      required: true,
      type: Number,
    },
    descriptionMaxLength: {
      required: true,
      type: Number,
    },
  },
});
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins/breakpoints";

.product {
  position: relative;
  &__name {
    font-weight: bold;
    min-height: 3em;
    font-size: 14px;

    @include media-breakpoint-up(md) {
      font-size: 16px;
    }
  }

  &__img {
    width: 100%;
  }

  &__fav {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }

  &__stock {
    background: grey;
    padding: 4px 14px 4px 15px;
    color: white;
    border-radius: $border-radius;
  }
}
</style>
