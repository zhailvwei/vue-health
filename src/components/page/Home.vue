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
        <el-row>
          <el-card shadow="hover" :body-style="{ height: '304px'}">
            <div slot="header" class="clearfix">
              <span>待办事项</span>
              <el-button @click="handleToDoListAdd" style="float: right; padding: 3px 0" type="text">添加</el-button>
            </div>
            <el-table ref="multipleTable" :data="todoList" :show-header="false" style="width: 100%">
              <el-table-column width="40">
                <template slot-scope="scope">
                  <el-checkbox v-model="scope.row.status"></el-checkbox>
                </template>
              </el-table-column>
              <el-table-column>
                <template slot-scope="scope">
                  <div v-if="!scope.row.editStatus" :class="{'todo-item-del': scope.row.status}">
                    {{scope.row.title}}
                  </div>
                  <span v-if="scope.row.editStatus">
                    <input class="cell-edit-input" type="text" v-model="scope.row.title" autofocus="autofocus"/>
                  </span>
                </template>
              </el-table-column>
              <el-table-column width="80">
                <template slot-scope="scope">
                  <i v-if="!scope.row.editStatus" @click="handleToDoListEdit(scope.row)" class="todo-item-action el-icon-edit"></i>
                  <i v-if="scope.row.editStatus" @click="handleToDoListSave(scope.row)" class="todo-item-action el-icon-circle-check-outline"></i>
                  <i @click="handleToDoListDelete(scope.$index, todoList)" class="todo-item-action el-icon-delete"></i>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
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
      },
      todoList: [
        {
          title: '发布《杭州市城乡医疗保险新知》公告',
          editStatus: false,
          status: false,
        },
        {
          title: '处理新入驻医药商家咨询',
          editStatus: false,
          status: false,
        },
        {
          title: '录入新增中草药数据',
          editStatus: false,
          status: false,
        },
        {
          title: '多写几个bug',
          editStatus: false,
          status: true,
        }
      ],
    }
  },
  components:{
    Schart
  },
  methods: {
    handleToDoListAdd() {

    },
    handleToDoListEdit(row) {
      row.editStatus = true;
    },
    handleToDoListSave(row) {
      row.editStatus = false;
    },
    handleToDoListDelete(index, rows) {
      rows.splice(index, 1);
    },
  }
}
</script>

<style scoped>
.home-page {
  font-size: 14px;
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
.todo-item-del {
  text-decoration: line-through;
  color: #999999;
}
.todo-item-action {
  cursor: pointer;
  font-size: 14px;
  margin-right: 15px;
}
.todo-item-action:hover {
  color: #409EFF;
}
.cell-edit-input {
  width: 70%;
  height: 17px;
  line-height: 17px;
  display: inline-block;
  padding: 2px 10px;
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.2s;
}
.cell-edit-input:focus {
  outline: none;
  border-color: #409eff;
}
</style>