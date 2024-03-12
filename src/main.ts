/*
* 1. 引入 Vue 3
* 2. 引入全局样式
* 3. 引入 App 组件
* 4. 引入路由
* 5. 引入 store
* 6. 引入组件库 ElementPlus(本页面引入)、ArcoVue(已设置自动引入)、NaiveUI(已设置自动引入)、Varlet(已设置自动引入)
*/


import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

import './style.css';
import router from './routers';

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const pinia = createPinia()

createApp(App)
  .use(pinia)
  .use(router)
  .use(pinia)
  .use(ElementPlus)
  .mount('#app');
