<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-12 col-sm-4 col-md-4 col-lg-3 mb-5"
           v-for="product in products" v-bind:key="product.id">
        <Product :id="product.id" :description="product.productDescription" :img="product.image_url"
                 :name="product.productName" :price="product.price"
                 :stock="product.stock"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Product from '@/components/Product.vue';
import ActionNames from '@/store/ActionNames';

export default defineComponent({
  name: 'Home',
  components: { Product },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  created() {
    this.$store.dispatch(ActionNames.GetProducts);
  },
});
</script>
