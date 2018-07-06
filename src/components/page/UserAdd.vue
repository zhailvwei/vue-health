<template>
  <div class="user-add">
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
              <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="ruleForm.password" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="rePassword">
                <el-input type="password" v-model="ruleForm.rePassword" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="性别" prop="gender">
                <el-radio-group v-model="ruleForm.gender">
                  <el-radio label="男" name="gender"></el-radio>
                  <el-radio label="女" name="gender"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="会员等级" prop="rank">
                <el-select v-model="ruleForm.rank" placeholder="请选择会员等级">
                  <el-option label="青铜会员" value="青铜会员"></el-option>
                  <el-option label="白银会员" value="白银会员"></el-option>
                  <el-option label="铂金会员" value="铂金会员"></el-option>
                  <el-option label="钻石会员" value="钻石会员"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="出生日期" required>
                <el-form-item prop="birthdate" style="margin-bottom: 0;">
                  <el-date-picker type="date" placeholder="选择用户出生日期" v-model="ruleForm.birthdate" style="width: 100%;"></el-date-picker>
                </el-form-item>
              </el-form-item>
              <el-form-item label="联系方式" prop="mobile">
                <el-input v-model="ruleForm.mobile" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="E-mail" prop="email">
                <el-input v-model="ruleForm.email" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="地址">
                <el-input v-model="ruleForm.address" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="备注">
                <el-input type="textarea" v-model="ruleForm.memo" rows="5"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
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
    var validatePassword = (rule, value, callback) => {
      if (value !== '') {
        if (this.ruleForm.rePassword !== '') {
          this.$refs.ruleForm.validateField('rePassword');
        }
        callback();
      }
    };
    var validateRePassword = (rule, value, callback) => {
      if (value !== '' && value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致'));
      } else {
        callback();
      }
    };
    return {
      menu: '',
      title: '',
      ruleForm: {
        username: '',
        password: '',
        rePassword: '',
        gender: '',
        rank: '',
        birthdate: '',
        mobile: '',
        email: '',
        address: '',
        memo: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入新增用户用户名', trigger: 'blur' },
          { min: 4, max: 20, message: '长度在 4 到 20 个字符之间', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 4, message: '长度不允许小于4', trigger: 'blur' },
          { validator: validatePassword, trigger: 'blur' }
        ],
        rePassword: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { validator: validateRePassword, trigger: 'blur' }
        ],
        gender: [
          { required: true, message: '请选择用户性别', trigger: 'change' }
        ],
        rank: [
          { required: true, message: '请选择会员等级', trigger: 'change' }
        ],
        birthdate: [
          { type: 'date', required: true, message: '请选择用户出生日期', trigger: 'change' }
        ],
        mobile: [
          { required: true, message: '请输入用户手机号', trigger: 'blur' },
          { pattern: /^1[3-9]\d{9}$/, message: '手机号格式错误', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入用户邮箱', trigger: 'blur' },
          { pattern: /^[^\s]+@[^\s]+\.[^\s]+$/, message: '邮箱格式错误', trigger: 'blur' }
        ]
      }
    }
  },
  mounted() {
    this.menu = this.$route.meta.menu;
    this.title = this.$route.meta.title;
  },
  methods: {
    submitForm(formName) {
      const that = this;

      this.$refs[formName].validate((valid) => {
        if (valid) {
          const date = this.ruleForm.birthdate;
          const year = date.getFullYear();
          const month = date.getMonth() + 1 > 10 ? date.getMonth() : `0${date.getMonth() + 1}`;
          const day = date.getDate();
          let data = {
            username: this.ruleForm.username,
            gender: this.ruleForm.gender,
            rank: this.ruleForm.rank,
            birthdate: `${year}-${month}-${day}`,
            mobile: this.ruleForm.mobile,
            email: this.ruleForm.email,
            address: this.ruleForm.address
          };
          this.$axios.post('http://localhost:3000/api/user/add', data)
          .then(function (res) {
            if (res.statusText === 'OK' && res.data.success) {
              that.$message({
                message: '操作成功！',
                type: 'success',
                duration: 3000,
                onClose: ()=> {
                  that.$router.push('/user-list');
                }
              });
            } else {
              that.$message({
                message: '操作失败！',
                type: 'error',
                duration: 3000
              })
            }
          })
          .catch(function (error) {
            console.log(error);
          });
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