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
              <el-form-item label="商家" prop="seller">
                <el-select v-model="seller" filterable remote placeholder="请输入用户查找商家"
                  :remote-method="searchSeller" :loading="loading" loading-text="加载中...">
                  <el-option v-for="item in sellerList" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="店铺名称" prop="shop">
                <el-input v-model="ruleForm.shop" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="店铺类型" prop="type">
                <el-select v-model="ruleForm.type" placeholder="请选择店铺类型">
                  <el-option label="普通店铺" value="普通店铺"></el-option>
                  <el-option label="自营店铺" value="自营店铺"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="店铺等级" prop="rank">
                <el-select v-model="ruleForm.rank" placeholder="请选择店铺等级">
                  <el-option label="铜牌店铺" value="铜牌店铺"></el-option>
                  <el-option label="银牌店铺" value="银牌店铺"></el-option>
                  <el-option label="金牌店铺" value="金牌店铺"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="店铺logo" prop="logo" required>
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  list-type="picture">
                  <el-button size="small" type="primary">点击上传</el-button>
                  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
              </el-form-item>
              <el-form-item label="入驻日期" required>
                <el-form-item prop="beginDate" style="margin-bottom: 0;">
                  <el-date-picker type="date" placeholder="选择店铺入驻日期" v-model="ruleForm.beginDate" style="width: 100%;"></el-date-picker>
                </el-form-item>
              </el-form-item>
              <el-form-item label="店铺联系方式" prop="mobile">
                <el-input v-model="ruleForm.mobile" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="店铺邮箱" prop="email">
                <el-input v-model="ruleForm.email" auto-complete="off"></el-input>
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
    return {
      menu: '',
      title: '',
      list: [],
      loading: false,
      seller: '',
      sellerList: [],
      states: [
        '同仁堂', '德聚堂', 'zhai', '阿里健康', '壹号大药房', '翟', '翟一', '翟二', '翟维维'
      ],
      ruleForm: {
        seller: '',
        shop: '',
        type: '',
        rank: '',
        logo: '',
        beginDate: '',
        mobile: '',
        email: '',
        memo: ''
      },
      rules: {
        seller: [
          { required: true, message: '请选择商家', trigger: 'change' }
        ],
        shop: [
          { required: true, message: '请输入店铺名称', trigger: 'blur' },
          { min: 4, max: 20, message: '长度在 4 到 20 个字符之间', trigger: 'blur' }
        ],
        type: [
          { required: true, message: '请选择店铺类型', trigger: 'change' }
        ],
        rank: [
          { required: true, message: '请选择店铺等级', trigger: 'change' }
        ],
        logo: [
          { required: true, message: '请选择店铺logo', trigger: 'change' }
        ],
        beginDate: [
          { type: 'date', required: true, message: '请选择店铺入驻生效日期', trigger: 'change' }
        ],
        mobile: [
          { required: true, message: '请输入店铺联系人手机号', trigger: 'blur' },
          { pattern: /^1[3-9]\d{9}$/, message: '手机号格式错误', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入店铺联系人邮箱', trigger: 'blur' },
          { pattern: /^[^\s]+\.[^\s]$/, message: '邮箱格式错误', trigger: 'blur' }
        ]
      }
    }
  },
  mounted() {
    this.menu = this.$route.meta.menu;
    this.title = this.$route.meta.title;
    this.list = this.states.map(item => {
      return { value: item, label: item };
    });
  },
  methods: {
    searchSeller(query) {
      if (query !== '') {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.sellerList = this.list.filter(item => {
            return item.label.toLowerCase()
              .indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.sellerList = [];
      }
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
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
      this.$router.push('/shop-list');
    }
  }
}
</script>

<style scoped>
.el-select {
  width: 100%;
}
.el-upload__tip {
  color: #409eff;
}
</style>