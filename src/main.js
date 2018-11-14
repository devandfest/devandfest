import Vue from 'vue'
import { Layout, Menu } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'


import App from './App'
import router from './router'

Vue.use(Layout);
Vue.use(Menu);
Vue.config.productionTip = false;



new Vue({
    router,
    render: h =>h(App),
}).$mount('#app');
