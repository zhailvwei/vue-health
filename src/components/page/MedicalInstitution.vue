<template>
  <div class="medical-institution">
    <el-row>
      <el-breadcrumb class="breadcrumb" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{title}}</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <el-row>
      <div class="content-box list">
        <div class="list-heading">
          <el-row>
            <el-col :span="15">
              <router-link to="/user-add">
                <el-button class="btn-add" icon="el-icon-plus">添加</el-button>
              </router-link>
              <el-button icon="el-icon-delete" :disabled="deleteItem">删除</el-button>
              <el-button icon="el-icon-refresh" @click="refresh">刷新</el-button>
            </el-col>
            <el-col :span="9">
              <el-input placeholder="请输入搜索关键词" v-model="keyword" class="input-with-select">
                <el-select v-model="select" slot="prepend" placeholder="请选择" style="width: 100px;">
                  <el-option label="医院名称" value="1"></el-option>
                  <el-option label="地址" value="2"></el-option>
                  <el-option label="等级" value="3"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </el-col>
          </el-row>
        </div>
        <div class="list-body">
          <el-table ref="multipleTable" :data="hospitalList" style="width: 100%" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="name" label="医院名称" width="220"></el-table-column>
            <el-table-column prop="rank" label="会员等级" width="100"></el-table-column>
            <el-table-column prop="phone" label="联系方式" width="130"></el-table-column>
            <el-table-column prop="address" label="地址" width="320"></el-table-column>
            <el-table-column prop="action" label="操作">
              <template slot-scope="scope">
                <router-link :to="{path:'/medical-institution-detail', query: {hospitalId: scope.row.id}}">
                  <el-button type="success" icon="el-icon-search" circle></el-button>
                </router-link>
                <router-link :to="{path:'/user-edit', query: {userId: scope.row.id}}">
                  <el-button type="primary" icon="el-icon-edit-outline" circle></el-button>
                </router-link>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="list-footer clearfix">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="10"
            layout="sizes, prev, pager, next"
            :total="26">
          </el-pagination>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
import hospitals from '@/json/hospitals.json';

export default {
  data() {
    return {
      title: '',
      select: '',
      keyword: '',
      deleteItem: true,
      hospitalList: [],
      currentPage: 1
    }
  },
  mounted() {
    this.title = this.$route.meta.title;
    this.hospitalList = hospitals.hospitalList;
  },
  methods: {
    refresh() {
      
    },
    handleSelectionChange(val) {
      console.log(val)
      if (val.length > 0) {
        this.deleteItem = false;
      } else {
        this.deleteItem = true;
      }
    },
    handleSizeChange() {
      
    },
    handleCurrentChange() {
      
    }
  }
}
</script>

<style scoped>
.btn-add {
  margin-right: 10px;
}
</style>