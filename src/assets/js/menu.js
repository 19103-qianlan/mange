export default [
  {
    title: '首页',
    icon: 'el-icon-s-home',
    children: [],
    index: 'home',
    to: 'mange'
  },
  {
    title: '数据管理',
    icon: 'el-icon-menu',
    index: 'mange',
    children: [
      {
        title: '用户列表',
        icon: '',
        to: '/mange/2'
      },
      {
        title: '商家列表',
        icon: '',
        to: '/mange/2-2'
      },
      {
        title: '视频列表',
        icon: '',
        to: '/mange/2-3'
      },
      {
        title: '订单列表',
        icon: '',
        to: '/mange/2-4'
      },
      {
        title: '管理员列表',
        icon: '',
        to: '/mange/2-5'
      }
    ]
  },
  {
    title: '添加数据',
    icon: 'el-icon-circle-plus-outline',
    index: 'add',
    children: [
      {
        title: '添加商铺',
        icon: '',
        to: '/mange/3-1'
      },
      {
        title: '添加食品',
        icon: '',
        to: '/mange/3-2'
      }
    ]
  },
  {
    title: '图表',
    icon: 'el-icon-present',
    index: 'chart',
    children: [
      {
        title: '用户分布',
        icon: '',
        to: '/mange/4-1'
      }
    ]
  },
  {
    title: '编辑',
    icon: 'el-icon-edit',
    index: 'edit',
    children: [
      {
        title: '文本编辑',
        icon: '',
        to: '/mange/5-1'
      }
    ]
  },
  {
    title: '设置',
    icon: 'el-icon-setting',
    index: 'setting',
    children: [
      {
        title: '管理员设置',
        icon: '',
        to: '/mange/6-1'
      }
    ]
  },
  {
    title: '说明',
    icon: 'el-icon-burger',
    index: 'explain',
    children: [
      {
        title: '关于',
        icon: '',
        to: '/mange/explanation'
      }
    ]
  },
  {
    title: '说明8855',
    icon: 'el-icon-burger',
    index: 'explain2233',
    show: false,
    children: [
      {
        title: '关于',
        icon: '',
        to: '/mange/explanation'
      }
    ]
  }
];
