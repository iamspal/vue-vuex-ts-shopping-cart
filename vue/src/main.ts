import { createApp } from 'vue';
import filters from '@/filters/filters';
import App from './App.vue';
import router from './router';
import { store } from './store';

const app = createApp(App);
app.use(store).use(router).mount('#app');
app.config.globalProperties.$filters = filters;
