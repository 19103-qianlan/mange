<template>
  <div class="register">
    <section class="wrapper">
      <el-form :model="ruleForm" size="mini" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="form">
        <el-form-item label="账号" prop="username">
          <el-input v-model.number="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
          <el-button type="success" @click="handleLogin">登录</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>

<script>
export default {
  name: 'register',
  data() {
    let checkUsername = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('账号不能为空'));
      }
      setTimeout(() => {
        if (!/^\w{6,10}$/.test(value)) {
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
        if (!/^\w{6,16}$/.test(value)) {
          callback(new Error('密码类型错误, 可以是数字或字母, 6-16位'));
          return false;
        }
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    let validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: '',
        checkPass: '',
        username: ''
      },
      rules: {
        pass: [{ validator: validatePass, trigger: 'change' }],
        checkPass: [{ validator: validatePass2, trigger: 'change' }],
        username: [{ validator: checkUsername, trigger: 'change' }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 在这里可以写注册登录的业务逻辑, 最好的下面的提示信息写到then里边去
          // 如果要做自动登录, 那么只需调用vuex里的login方法传入对应的username(必选)和token(可选)就可以进行自动登录
          // 在需要的地方再去根据这个username或者token进行获取即可, 如果需要存储更多的用户信息, 自己做简单修改即可
          this.$message({
            message: '注册成功',
            type: 'success'
          });
        } else {
          this.$message({
            message: '注册失败, 请重试',
            type: 'warning'
          });
        }
      });
    },
    handleLogin() {
      this.$router.push('/login');
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped lang="scss">
.register {
  height: 100%;
  .form {
    width: 400px;
    .is-username {
      text-align: right;
      line-height: 3.5;
      a {
        color: #5fadff;
      }
    }
  }
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: center;
  }
}
</style>
