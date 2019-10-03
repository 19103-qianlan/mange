import Vue from 'vue';
import Router from 'vue-router';
// import Home from './views/Home.vue';
import Mange from 'views/mange';
import Login from 'comps/login';
import Res from 'comps/res';
import HeadTop from 'comps/head-top';
import UserItem from 'comps/user-item';
import Explanation from 'views/explanation';
import store from './store';

// 注意一个问题, 如果使用路由懒加载, 那么可能会在开发环境下出现更新不及时的问题, 但是在生产环境下很实用, 可以提升很多的性能

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/mange'
        },
        {
            path: '/redirect',
            component: Mange,
            hidden: true,
            children: [
                {
                    path: '/redirect/:path*',
                    component: () => import('comps/redirect')
                }
            ]
        },
        {
            path: '/mange',
            component: Mange,
            children: [
                {
                    path: '',
                    component: HeadTop
                },
                {
                    path: '2',
                    component: HeadTop,
                    meta: ['数据管理', '用户列表'],
                },
                {
                    path: 'explanation',
                    component: Explanation,
                    meta: ['说明', '关于']
                },
                {
                    path: 'useritem',
                    component: UserItem
                },
                {
                    path: '2-2',
                    meta: ['数据管理', '商家列表'],
                    component: Explanation
                },
                {
                    path: '2-3',
                    meta: ['数据管理', '视频列表'],
                    component: Explanation
                },
                {
                    path: '2-4',
                    meta: ['数据管理', '订单列表'],
                    component: Explanation
                },
                {
                    path: '2-5',
                    meta: ['数据管理', '管理员列表'],
                    component: Explanation
                },
                {
                    path: '3-1',
                    meta: ['添加数据', '添加商铺'],
                    component: Explanation
                },
                {
                    path: '3-2',
                    meta: ['添加数据', '添加食品'],
                    component: Explanation
                },
                {
                    path: '4-1',
                    meta: ['图表', '用户分布'],
                    component: Explanation
                },
                {
                    path: '5-1',
                    meta: ['编辑', '文本编辑'],
                    component: Explanation
                },
                {
                    path: '6-1',
                    meta: ['设置', '管理员设置'],
                    component: Explanation
                }
            ],
            beforeEnter: (to, from, next) => {
                if (!store.state.user) {
                    next('/login');
                    return false;
                }
                next();
            }
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')

        },
        {
            path: '/res',
            name: 'res',
            component: Res
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }/*,
        {
            path: '/1',
            component: Mange
        }*/
    ]
});
