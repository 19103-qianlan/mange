import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUi from 'element-ui';
// scss css
import 'element-ui/lib/theme-chalk/index.css';
import 'assets/css/base.css';

// js
// import common from 'assets/js/common';

// component vue
import HeadTop from 'comps/head-top';

Vue.config.productionTip = false;
Vue.use(ElementUi);
Vue.component('HeadTop', HeadTop);

/*// let getUser = common.getUser({username: 'username'});
router.beforeEach((to, from, next) => {
    if (!state. && !(/(login|res)/ig.test(to.name))) {
        next('/res');
        return false;
    }
    next();
});*/

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
