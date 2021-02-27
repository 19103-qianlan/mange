import Layout from 'layout/layout';
import Login from 'comps/login';
import Register from 'comps/register';
import HeadTop from 'comps/headTop';
import UserItem from 'comps/userItem';
import Explanation from 'views/explanation';
export default [
  {
    path: '/',
    redirect: '/Layout'
  },
  {
    path: '/redirect',
    component: Layout,
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
    component: Layout,
    children: [
      {
        path: '',
        component: HeadTop
      },
      {
        path: '2',
        component: HeadTop,
        meta: ['数据管理', '用户列表']
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
    ]
  },
  {
    path: '/about',
    name: 'about'
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
];
