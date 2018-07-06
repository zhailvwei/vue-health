<template>
  <div class="user-edit">
    <el-row>
      <el-breadcrumb class="breadcrumb" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{menu}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{title}}</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <el-row>
      <div class="content-box">
        <el-row>
          <el-col :span="11" :offset="2">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
              <el-form-item label="用户名" prop="username">
                <el-input v-model="ruleForm.username" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="性别" prop="gender">
                <el-radio-group v-model="ruleForm.gender">
                  <el-radio label="男" name="gender"></el-radio>
                  <el-radio label="女" name="gender"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="出生日期" required>
                <el-form-item prop="birthdate" style="margin-bottom: 0;">
                  <el-date-picker type="date" placeholder="选择用户出生日期" v-model="ruleForm.birthdate" style="width: 100%;"></el-date-picker>
                </el-form-item>
              </el-form-item>
              <el-form-item label="会员等级" prop="rank">
                <el-select v-model="ruleForm.rank" placeholder="请选择会员等级">
                  <el-option label="青铜会员" value="青铜会员"></el-option>
                  <el-option label="白银会员" value="白银会员"></el-option>
                  <el-option label="铂金会员" value="铂金会员"></el-option>
                  <el-option label="钻石会员" value="钻石会员"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="联系方式" prop="mobile">
                <el-input v-model="ruleForm.mobile" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="E-mail" prop="email">
                <el-input v-model="ruleForm.email" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="备注">
                <el-input type="textarea" v-model="ruleForm.memo" rows="5"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">保存修改</el-button>
                <el-button @click="back()">返回</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: '',
      title: '',
      userId: this.$route.query.userId,
      ruleForm: {
        username: '',
        gender: '',
        rank: '',
        birthdate: '',
        mobile: '',
        email: '',
        memo: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入新增用户用户名', trigger: 'blur' },
          { min: 4, max: 20, message: '长度在 4 到 20 个字符之间', trigger: 'blur' }
        ],
        gender: [
          { required: true, message: '请选择用户性别', trigger: 'change' }
        ],
        birthdate: [
          { type: 'date', required: true, message: '请选择用户出生日期', trigger: 'change' }
        ],
        rank: [
          { required: true, message: '请选择会员等级', trigger: 'change' }
        ],
        mobile: [
          { required: true, message: '请输入用户手机号', trigger: 'blur' },
          { pattern: /^1[3-9]\d{9}$/, message: '手机号格式错误', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入用户邮箱', trigger: 'blur' },
          { pattern: /^[^\s]+\.[^\s]$/, message: '邮箱格式错误', trigger: 'blur' }
        ]
      }
    }
  },
  mounted() {
    this.menu = this.$route.meta.menu;
    this.title = this.$route.meta.title;
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      const that = this;
      this.$axios.get('http://localhost:3000/api/user/user', {
        params: {
          id: that.userId
        }
      })
      .then(function (res) {
        console.log(res)
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          return false;
        }
      });
    },
    back() {
      this.$router.push('/user-list');
    }
  }
}
</script>

<style scoped>

</style>