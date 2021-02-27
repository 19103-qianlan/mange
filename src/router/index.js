import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';
import store from '../store';
// 注意一个问题, 如果使用路由懒加载, 那么可能会在开发环境下出现更新不及时的问题, 但是在生产环境下很实用, 可以提升很多的性能

Vue.use(Router);

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (!store.state.user) {
    next('/login');
    return false;
  }
  next();
});

export default router;
