<template>
    <div class="login">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="账号" prop="username">
                <el-input v-model.number="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
        <div class="is-username">
            <router-link to="/res">还没有账号, 点击注册</router-link>
        </div>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex';
    export default {
        name: 'login',
        data() {
            let checkUsername = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('账号不能为空'));
                }
                setTimeout(() => {
                    if (!(/^\w{6,10}$/.test(value))) {
                        callback(new Error('账号类型错误, 可以是数字字母, 6-10位'));
                    } else {
                        callback();
                    }
                }, 1000);
            };
            let validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (!(/^\w{6,16}$/.test(value))) {
                        callback(new Error('密码类型错误, 可以是数字或字母, 6-16位'));
                        return false;
                    }
                    callback();
                }
            };
            return {
                ruleForm: {
                    pass: '',
                    username: ''
                },
                rules: {
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    username: [
                        { validator: checkUsername, trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            ...mapMutations([
                'login'
            ]),
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        // 具体使用可以参考src/component/res.vue页面的解释
                        this.login({
                            username: this.ruleForm.username
                        });
                        this.$message({
                            message: '登录成功',
                            type: 'success'
                        });
                        this.$router.replace('/');
                    } else {
                        this.$message({
                            message: '登录失败, 请重试',
                            type: 'warning'
                        });
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    };
</script>

<style scoped lang="scss">
    .login {
        width: 500px;
        height: 500px;
        margin: 200px auto 0;
        text-align: center;
        .is-username {
            width: 100%;
            text-align: right;
            line-height: 3.5;
            a {
                color: darkgreen;
            }
        }
    }
</style>
