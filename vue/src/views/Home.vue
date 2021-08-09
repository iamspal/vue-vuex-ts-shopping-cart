<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-6 col-sm-4 col-md-4 col-lg-3 mb-5"
           v-for="product in products" v-bind:key="product.id">
        <Product :id="product.id"
                 :description="product.productDescription"
                 :img="product.image_url"
                 :name="product.productName"
                 :price="product.price"
                 :stock="product.stock"
                 :fav="product.favorite"
                 :description-max-length="50"
                 @add-to-cart="addToCart"
                 @toggle-favorite="toggleFavorite"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Product from '@/components/Product.vue';
import ActionNames from '@/store/ActionNames';
import Utils from '@/utils/Utils';
import MutationsName from '@/store/MutationsName';

export default defineComponent({
  name: 'Home',
  components: { Product },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  async mounted() {
    await this.$store.dispatch(ActionNames.GetProducts);
    await this.$store.dispatch(ActionNames.GetCartProducts);
  },
  methods: {
    async addToCart(id: string) {
      await this.$store.dispatch(ActionNames.AddToCart, id);
      if (Utils.isMobile()) {
        await this.$router.push('/cart');
      } else {
        this.$store.commit(MutationsName.SetCartOpened, true);
      }
    },
    async toggleFavorite(id: string) {
      await this.$store.dispatch(ActionNames.ToggleFavorite, id);
    },
  },
});
</script>
