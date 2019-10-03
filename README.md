# 02-一个后台管理系统

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```
### assets与static的区别
- 相同点：资源在html中使用，都是可以的。
- 不同点：使用assets下面的资源，在js中使用的话，路径要经过webpack中file-loader编译，路径不能直接写。
- assets中的文件会经过webpack打包，重新编译，推荐该方式
- 而static中的文件，不会经过编译。项目在经过打包后，会生成dist文件夹，static中的文件只是复制一遍而已。简单来说，static中建议放一些外部第三方，自己的放到assets，别人的放到static中
- 注意：如果把图片放在assets与static中，html页面可以使用；但在动态绑定中，assets路径的图片会加载失败，因为webpack使用的是commenJS规范，必须使用require才可以

### vue-router

#### keep-alive

- keep-alive是Vue提供的一个抽象组件，用来对组件进行缓存，从而节省性能，由于是一个抽象组件，所以在v页面渲染完毕后不会被渲染成一个DOM元素
- 刷新当前路由不会有所改变, 确保当前页面正常且节省性能

#### 路由嵌套

- 使用children参数, path属性第一个路由不需要`/`

- 也可以传meta, 用来做面包屑导航是个错的选择

  ```javascript
  path: '/mange',
  component: Mange,
  children: [
      {
          path: '',
          component: HeadTop
      },
      {
          path: '1',
          component: HeadTop,
          meta: ['数据管理', '用户列表']
      }
  ],
  beforeEnter: (to, from, next) => {
      // console.log(to, from);
      next();
  }
  ```

  #### ①beforeEnter(main.js全局)和②beforeEnter(router.js全局)
  
  - ①会出现路由进入出现无限调用的问题, 有点是会拦截所有路由, 适合做登录才可以访问的网站
  - ②不会出现, 缺点是每个路由都到要一遍, **一般登录都在一个路由下(无限嵌套)**, 使用它最好, 因为一般不要权限的不写匹配就可以了, 不拦截

### element-ui

#### NavMenu导航栏

##### 属性default-active

- 这个是个根据浏览器的地址栏展开选项(`el-menu-item`)
- 一般是**default-active="$router.path"**就可以, 如果是复杂一点的, 可以根据实际情况在computed里写对应的值

##### 面包屑导航(breadcrumb)

- 这个导航应该在单独的一个组件里, 单独引用, 如果就写在一个组件(`例如mange`), 会出现不好更新的问题, 还有也不方便在刷新后正确显示, 还会造成页面臃肿
- 使用vue-router里的meta参数, 可以在`$route.meta`里拿到, 但是只要刷新后也会消失, 记得使用**keep-alive**

### redirect刷新

- 因为 vue-router 会拦截你的路由，**它判断你的 url 并没有任何变化**，所以它不会触发任何钩子或者是 view 的变化

- 使用一个第三方组件
- 下面是示例

#### redirect.vue

```javascript
<script>
    export default {
        name: 'redirect',
        beforeCreate() {
            const {params, query} = this.$route;
            const {path} = params;
            this.$router.replace({
                path: '/' + path,
                query
            });
            return false;
        },
        render(h) {
            return h();
        }
    };
</script>
```

#### 要实现刷新的使用

```js
const { fullPath } = this.$route;
this.$router.replace({
    path: '/redirect' + fullPath
});
```

#### 路由配置

```js
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
}
```



### 布局特点

- 左右布局, 右上和右下布局

