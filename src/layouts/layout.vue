<template>
  <el-row>
    <el-col :span="4" style="background: #324056">
      <el-menu
        :default-active="defaultActive"
        background-color="#324056"
        text-color="#FFF"
        active-text-color="#61afef"
        class="el-menu-vertical-demo"
        :unique-opened="true"
        router
        @open="handleOpen"
        @close="handleClose"
      >
        <template v-for="item of menu">
          <el-submenu :index="item.index" :key="item.index" v-if="item.children.length">
            <template slot="title">
              <i :class="[item.icon]"></i>
              <span>{{ item.title }}</span>
            </template>
            <el-menu-item v-for="sub of item.children" :key="sub.to" :route="sub.to" :index="sub.to">
              <template v-if="sub.show || sub.show === undefined">
                <i :class="[sub.icon]" v-if="sub.icon"></i>
                {{ sub.title }}
              </template>
            </el-menu-item>
          </el-submenu>
          <el-menu-item :index="item.to" v-else :key="item.index" @click.native="$router.push('/' + item.to)">
            <i :class="[item.icon]" v-if="item.icon"></i>
            {{ item.title }}
          </el-menu-item>
        </template>
      </el-menu>
    </el-col>
    <el-col :span="20">
      <keep-alive>
        <router-view />
      </keep-alive>
    </el-col>
  </el-row>
</template>

<script>
// import common from 'assets/js/common';
import menu from 'assets/js/menu';
export default {
  name: 'mange',
  data() {
    return {
      headerHeight: 0,
      breadcrumbArr: [],
      menu: menu.filter(item => item.isShow || item.show === undefined)
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
      // this.breadcrumbArr = this.$route.meta;
      /*this.$set(this.breadcrumbArr, 1, {inner: keyPath[0]});
                console.log(this.$route.matched);*/
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  computed: {
    defaultActive() {
      return this.$route.path;
    }
  },
  mounted() {
    // this.breadcrumbArr = this.$route.meta;// 需要再执行一次
  }
};
</script>

<style scoped lang="scss">
.el-row {
  width: 100%;
  height: 100%;
  .el-col {
    height: 100%;
    overflow-y: auto;
    h5 {
      width: 100%;
      height: 45px;
      font-size: 23px;
      color: #fff;
      line-height: 2;
      text-indent: 20px;
    }
  }
}
</style>
