import { Store } from 'vuex';

declare module '@vue/runtime-core' {
  // eslint-disable-next-line no-shadow
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
