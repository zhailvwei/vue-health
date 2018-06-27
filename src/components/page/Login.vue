<template>
  <div class="login-wrap">
    <div class="title">市民健康管理系统</div>
    <div class="login-form">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px">
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placeholder="请输入用户名" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="请输入密码" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')" auto-complete="off"></el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        ruleForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        },
        loginInfo: {
          'loginTime': '',
          'loginArea': '杭州'
        }
      }
    },
    mounted() {
      const date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      if (hours < 10) {
        hours = `0${hours}`;
      }
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }
      this.loginInfo.loginTime = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日 ${hours}:${minutes}:${seconds}`;
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            localStorage.setItem('adminUsername', JSON.stringify(this.ruleForm.username));
            localStorage.setItem('loginInfo', JSON.stringify(this.loginInfo));
            this.$router.push('/');
          } else {
            return false;
          }
        });
      }
    }
  }
</script>

<style scoped>
.login-wrap {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #324157;
}
.title {
  width:100%;
  position: absolute;
  top:50%;
  margin-top: -230px;
  text-align: center;
  font-size:30px;
  color: #ffffff;
}
.login-form {
  width: 300px;
  height: 160px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -150px 0 0 -190px;
  padding: 40px;
  border-radius: 5px;
  background: #ffffff;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width:100%;
  height:36px;
}
</style>