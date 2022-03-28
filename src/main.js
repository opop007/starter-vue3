import { createApp } from 'vue';
import App from './App.vue';
import 'virtual:windi.css';
import router from './router/index';
import { createPinia } from 'pinia';
import { message } from 'ant-design-vue';
import 'ant-design-vue/es/message/style/css'; //vite只能用 ant-design-vue/es 而非 ant-design-vue/lib

createApp(App)
const app = createApp(App);

app.use(router)
app.use(message)
app.use(createPinia())

app.mount('#app');
