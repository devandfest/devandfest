/**
 * @license
 * Copyright (c) 2018 DevAndFest
 * This code was licensed under the MIT license
 */

// Import the Vue library
import Vue from "vue";

// Ant Design Frawework
import { Layout, Menu } from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

Vue.use(Layout);
Vue.use(Menu);

// Internationalization
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

import messages from "./langs/langs";
const i18n = new VueI18n({
  locale: Object.keys(messages)[0],
  messages
});

// Application
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;

// Create the Vue application
new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount("#app");
