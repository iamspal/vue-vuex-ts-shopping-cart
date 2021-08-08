<template>
  <div class="cart container">
    <cart-products></cart-products>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import CartProducts from '@/components/CartProducts.vue';
import ActionNames from '@/store/ActionNames';

export default defineComponent({
  name: 'Cart',
  components: { CartProducts },
  created() {
    this.$store.dispatch(ActionNames.GetCartProducts);
  },
});
</script>

<style lang="scss" scoped>
.cart {
  padding-top: 15px;
}
</style>
