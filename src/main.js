import { createApp } from 'vue';
import App from './App.vue';
import './styles/tailwind.css';
import 'virtual:windi.css';
import router from './router/index';
import { createPinia } from 'pinia';
import { message } from 'ant-design-vue';
import 'ant-design-vue/es/message/style/css'; //vite只能用 ant-design-vue/es 而非 ant-design-vue/lib
import _ from 'lodash';

createApp(App)
const app = createApp(App);
app.use(router)
app.use(message)
app.use(createPinia())

app.config.globalProperties.$_get = _.get;


app.mount('#app');
