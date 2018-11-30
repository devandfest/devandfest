import Vue from 'vue'
import App from './App.vue'
import { Layout, Timeline, Button } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'

Vue.use(Layout);
Vue.use(Button);
Vue.use(Timeline);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app')
