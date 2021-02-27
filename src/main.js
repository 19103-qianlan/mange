import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUi from 'element-ui';
// scss css
import 'element-ui/lib/theme-chalk/index.css';
import 'assets/css/base.css';

// component vue
import HeadTop from 'comps/headTop';

Vue.config.productionTip = false;
Vue.use(ElementUi);
Vue.component('HeadTop', HeadTop);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
