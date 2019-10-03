<template>
    <el-row>
        <el-col :span="4" style="background: #324056;">
            <el-menu
                :default-active="defaultActive"
                background-color="#324056"
                text-color="#FFF"
                active-text-color="#61afef"
                class="el-menu-vertical-demo"
                :unique-opened="true"
                router
                @open="handleOpen"
                @close="handleClose">
                <el-menu-item index="/mange"><i class="el-icon-s-home"></i>首页</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>数据管理</span>
                    </template>
                    <el-menu-item index="/mange/2">用户列表</el-menu-item>
                    <el-menu-item index="/mange/2-2">商家列表</el-menu-item>
                    <el-menu-item index="/mange/2-3">视频列表</el-menu-item>
                    <el-menu-item index="/mange/2-4">订单列表</el-menu-item>
                    <el-menu-item index="/mange/2-5">管理员列表</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-folder-add"></i>
                        <span>添加数据</span>
                    </template>
                    <el-menu-item index="/mange/3-1">添加商铺</el-menu-item>
                    <el-menu-item index="/mange/3-2">添加食品</el-menu-item>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title">
                        <i class="el-icon-star-on"></i>
                        <span>图表</span>
                    </template>
                    <el-menu-item index="/mange/4-1">用户分布</el-menu-item>
                </el-submenu>
                <el-submenu index="5">
                    <template slot="title">
                        <i class="el-icon-edit"></i>
                        <span>编辑</span>
                    </template>
                    <el-menu-item index="/mange/5-1">文本编辑</el-menu-item>
                </el-submenu>
                <el-submenu index="6">
                    <template slot="title">
                        <i class="el-icon-setting"></i>
                        <span>设置</span>
                    </template>
                    <el-menu-item index="/mange/6-1">管理员设置</el-menu-item>
                </el-submenu>
                <el-submenu index="7">
                    <template slot="title">
                        <i class="el-icon-burger"></i>
                        <span>说明</span>
                    </template>
                    <el-menu-item index="/mange/explanation">关于</el-menu-item>
                </el-submenu>
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
    export default {
        name: 'mange',
        data() {
            return{
                headerHeight: 0,
                breadcrumbArr: []
            };
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
                this.breadcrumbArr = this.$route.meta;
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
        .el-col{
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
