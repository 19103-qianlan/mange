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

### Run your unit tests

```
npm run test:unit
```

### assets 与 static 的区别

- 相同点：资源在 html 中使用，都是可以的。
- 不同点：使用 assets 下面的资源，在 js 中使用的话，路径要经过 webpack 中 file-loader 编译，路径不能直接写。
- assets 中的文件会经过 webpack 打包，重新编译，推荐该方式
- 而 static 中的文件，不会经过编译。项目在经过打包后，会生成 dist 文件夹，static 中的文件只是复制一遍而已。简单来说，static 中建议放一些外部第三方
- 注意：如果把图片放在 assets 与 static 中，html 页面可以使用；但在动态绑定中，static 路径的图片会加载失败，因为 webpack 使用的是 commenJS 规范，必须使用 require 才可以

### vue-router

- beforeEach 全局前置守卫

#### keep-alive

- keep-alive 是 Vue 提供的一个抽象组件，用来对组件进行缓存，从而节省性能，由于是一个抽象组件，所以在 v 页面渲染完毕后不会被渲染成一个 DOM 元素
- 刷新当前路由不会有所改变, 确保当前页面正常且节省性能

#### 路由嵌套

- 使用 children 参数, path 属性第一个路由不需要`/`

- 也可以传 meta, 用来做面包屑导航是个错的选择

- 注意需要对应的 router-view, 也可以注册一个局部的路由守卫

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

### element-ui

#### NavMenu 导航栏

##### 属性 default-active

- 这个是个根据浏览器的地址栏展开选项(`el-menu-item`)
- 一般是**default-active="\$router.path"**就可以, 如果是复杂一点的, 可以根据实际情况在 computed 里写对应的值

##### 面包屑导航(breadcrumb)

- 这个导航应该在单独的一个组件里, 单独引用, 如果就写在一个组件(`例如mange`), 会出现不好更新的问题, 还有也不方便在刷新后正确显示, 还会造成页面臃肿
- 使用 vue-router 里的 meta 参数, 可以在`$route.meta`里拿到, 但是只要刷新后也会消失, 记得使用**keep-alive**

### redirect 刷新

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
