import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import '@/components/style/main.less';
import '@/components/style/navbar.less';
import '@/components/style/slider.less';
import '@/components/style/pop-modal.less';

const app = createApp(App);

app.use(router);
app.mount('#app');