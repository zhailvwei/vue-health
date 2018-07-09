<template>
  <div class="user-detail">
    <el-row>
      <el-breadcrumb class="breadcrumb" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{menu}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{title}}</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <el-row>
      <div class="content-box">
        <el-row :gutter="20">
          <el-col :span="10">
            <el-card class="user-profile" shadow="hover">
              <div slot="header" class="user">
                <img class="user-photo" src="~@/assets/images/user.jpg" />
                <div class="user-info">
                  <div class="title">{{userInfo.username}}</div>
                  <p>{{userInfo.rank}}</p>
                </div>
              </div>
              <ul class="detail-info-list">
                <li>
                  <label>性别</label>
                  <span>{{userInfo.gender}}</span>
                </li>
                <li>
                  <label>联系方式</label>
                  <span>{{userInfo.mobile}}</span>
                </li>
                <li>
                  <label>E-mail</label>
                  <span>{{userInfo.email}}</span>
                </li>
                <li>
                  <label>出生日期</label>
                  <span>{{userInfo.birthdate}}</span>
                </li>
                <li>
                  <label>地址</label>
                  <span>{{userInfo.address}}</span>
                </li>
                <li>
                  <label>备注</label>
                  <span>{{userInfo.memo}}</span>
                </li>
              </ul>
              <div class="detail-info-footer">
                <el-button @click="back()">返回</el-button>
              </div>
            </el-card>
            <el-card class="active-chart" shadow="hover">
              <div slot="header">近半年用户活跃度<span class="text-yellow small">（登录次数）</span></div>
              <schart canvasId="active" type="bar" style="width: 100%;height: 200px;" :data="activeData" :options="activeOptions"></schart>
            </el-card>
          </el-col>
          <el-col :span="14">
            <el-card class="order-chart" shadow="hover">
              <div slot="header">近半年订单数<span class="text-blue small">（单位：个）</span></div>
              <schart canvasId="orderChart" type="line" style="width: 100%;height: 200px;" :data="orderData" :options="orderOptions"></schart>
            </el-card>
            <el-card class="expense-chart" shadow="hover">
              <div slot="header">近半年消费金额<span class="text-green small">（单位：元）</span></div>
              <schart canvasId="expenseChart" type="line" style="width: 100%;height: 200px;" :data="expenseData" :options="expenseOptions"></schart>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </el-row>
  </div>
</template>

<script>
import Schart from 'vue-schart';

export default {
  data() {
    return {
      menu: '',
      title: '',
      userId: this.$route.query.userId,
      userInfo: [],
      activeData: [
        {name: '2月', value: 15},
        {name: '3月', value: 62},
        {name: '4月', value: 72},
        {name: '5月', value: 2},
        {name: '6月', value: 83},
        {name: '7月', value: 9},
      ],
      activeOptions: {
        padding: 0,
        bgColor: '#FFFFFF',
        yEqual: 5,
        fillColor: '#e6a23c',
        contentColor: '#eeeeee',
        axisColor: '#666666',
      },
      orderData: [
        {name: '2月', value: 0},
        {name: '3月', value: 5},
        {name: '4月', value: 0},
        {name: '5月', value: 1},
        {name: '6月', value: 8},
        {name: '7月', value: 2},
      ],
      orderOptions: {
        padding: 0,
        bgColor: '#FFFFFF',
        yEqual: 5,
        fillColor: '#1E9FFF',
        contentColor: '#eeeeee',
        axisColor: '#666666',
      },
      expenseData: [
        {name: '2月', value: 0},
        {name: '3月', value: 588},
        {name: '4月', value: 0},
        {name: '5月', value: 688},
        {name: '6月', value: 1863},
        {name: '7月', value: 182},
      ],
      expenseOptions: {
        padding: 0,
        bgColor: '#FFFFFF',
        yEqual: 5,
        fillColor: '#67c23a',
        contentColor: '#eeeeee',
        axisColor: '#666666',
      },
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
      this.$axios.post('http://localhost:3000/api/user/user', {
          id: that.userId
        })
      .then(function (res) {
        if (res.data.success & res.data.data.length > 0) {
          that.userInfo = res.data.data[0];
        } else {
          that.$message({
            message: '没有该用户！',
            type: 'error',
            duration: 1500,
            onClose: ()=> {
              that.$router.push('/user-list');
            }
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    back() {
      this.$router.push('/user-list');
    }
  },
  components:{
    Schart
  },
}
</script>

<style scoped>
.content-box {
  padding: 0;
  background-color: transparent;
}
.user-detail {
  font-size: 14px;
}
.user-profile {
  font-size: 12px;
}
.user-profile .user {
  display: flex;
  align-items: center;
  color: #ffffff;
  padding-left: 50px;
}
.user-profile .user-photo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.user-profile .user-info {
  padding-left: 40px;
}
.user-profile .user-info .title {
  line-height: 40px;
  font-size: 20px;
  font-weight: bold;
}
.el-card {
  margin-bottom: 20px;
}
.el-card:last-child {
  margin-bottom: 0;
}
</style>
<style>
.user-detail .user-profile .el-card__header {
  background-color: #00a7d0;
}
</style>
