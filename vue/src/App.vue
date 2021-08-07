<template>
  <Header></Header>
  <router-view/>
</template>

<style lang="scss">
@import 'assets/scss/main';

</style>
<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';

export default defineComponent({
  name: 'App',
  components: { Header },
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
