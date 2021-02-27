<template>
  <div class="head-top">
    <el-col :span="24" style="height: 50px; font-size: 14px">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/mange' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-for="(item, i) of $route.meta" :key="i">{{ item }}</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
    <el-dropdown>
      <el-button type="primary">
        <img class="avatar" src="../assets/images/avatar/1.jpg" alt="" />
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="userItem">账号信息</el-dropdown-item>
        <el-dropdown-item @click.native="userLogout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: 'headTop',
  methods: {
    ...mapMutations(['logout']),
    userItem() {
      this.$router.push('/mange/useritem');
    },
    userLogout() {
      this.logout();
      const { fullPath } = this.$route;
      this.$router.replace({
        path: '/redirect' + fullPath
      });
    }
  }
};
</script>

<style scoped lang="scss">
.head-top {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #f5f5f5;
  .el-breadcrumb {
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 15px;
    padding-left: 10px;
    .el-menu-item {
      color: #ccc;
    }
  }
  .el-dropdown {
    margin-right: 30px;
    width: 50px;
    height: 30px;
    line-height: 1.5;
    text-align: center;
    .el-button {
      padding: 0;
      .avatar {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
    }
  }
}
</style>
