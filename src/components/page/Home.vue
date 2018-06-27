<template>
  <div class="home-page">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class="admin-profile" shadow="hover">
          <div slot="header" class="admin">
            <img class="admin-photo" src="~@/assets/images/user.jpg" />
            <div class="admin-info">
              <div class="title">{{adminName}}</div>
              <p>{{rule}}</p>
            </div>
          </div>
          <p>最近一次登录时间：<span class="login-info">{{loginTime}}</span></p>
          <p>最近一次登录地点：<span class="login-info">{{loginArea}}</span></p>
        </el-card>
        <el-card class="chart" shadow="hover">
          <div slot="header">近四个月用户访问量</div>
          <schart :canvasId="canvasId" :type="type" :width="width" :height="height" :data="chartData" :options="options"></schart>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{padding: '0px'}">
              <div class="info-box">
                <div class="info-box-icon bg-blue">
                  <i class="iconfont icon-shouye27"></i>
                </div>
                <div class="info-box-content">
                  <p class="text-blue">726</p>
                  <p class="description">医药电商入驻数</p>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{padding: '0px'}">
              <div class="info-box">
                <div class="info-box-icon bg-green">
                  <i class="iconfont icon-shouye13"></i>
                </div>
                <div class="info-box-content">
                  <p class="text-green">1234</p>
                  <p class="description">用户访问量</p>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{padding: '0px'}">
              <div class="info-box">
                <div class="info-box-icon bg-yellow">
                  <i class="iconfont icon-shouye30"></i>
                </div>
                <div class="info-box-content">
                  <p class="text-yellow">666</p>
                  <p class="description">系统消息</p>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Schart from 'vue-schart';

export default {
  data() {
    return {
      adminName: JSON.parse(localStorage.getItem('adminUsername')),
      loginTime: JSON.parse(localStorage.getItem('loginInfo')).loginTime,
      loginArea: JSON.parse(localStorage.getItem('loginInfo')).loginArea,
      rule: '系统管理员',
      canvasId: 'chart',
        type: 'ring',
        width: '100%',
        height: 'auto',
        chartData: [
          {name: '3月', value: 1342},
          {name: '4月', value: 2123},
          {name: '5月', value: 1654},
          {name: '6月', value: 1795},
        ],
        options: {
          padding: 30,
          bgColor: '#FFFFFF',
          legendColor: '#000000',
          legendTop: 50,
          colorList: ['#1E9FFF', '#13CE66', '#F7BA2A', '#FF4949', '#72f6ff'],
          radius: 70,
          innerRadius: 40
            
        }
    }
  },
  components:{
    Schart
  }
}
</script>

<style scoped>
.home-page {
  font-size: 14px;
}
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.admin-profile {
  margin-bottom: 20px;
}
.admin {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.admin-photo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.admin-info .title {
  font-size: 20px;
  font-weight: bold;
}
.admin-info p {
  line-height: 25px;
  color: #666666;
}
.login-info {
  color: #666666;
}
.chart {
  height: 250px;
}
.info-box {
  height: 90px;
  display: flex;
  text-align: center;
  align-items: center;
}
.info-box .info-box-icon {
  width: 40%;
  height: 90px;
  line-height: 90px;
  color: #ffffff;
}
.info-box .info-box-icon .iconfont {
  font-size: 40px;
}
.info-box .info-box-content {
  width: 60%;
  height: 90px;
}
.info-box .info-box-content p:first-child {
  line-height: 40px;
  padding-top: 13px;
  font-size: 25px;
  font-weight: bold;
}
.info-box .info-box-content .description {
  font-size: 12px;
  color: #777777;
}
</style>