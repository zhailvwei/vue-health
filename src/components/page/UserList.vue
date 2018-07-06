<template>
  <div class="user-list">
    <el-row>
      <el-breadcrumb class="breadcrumb" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{menu}}</el-breadcrumb-item>
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
              <el-button icon="el-icon-delete" :disabled="deleteItem" @click="handleDelete">删除</el-button>
              <el-button icon="el-icon-refresh" @click="refresh">刷新</el-button>
            </el-col>
            <el-col :span="9">
              <el-input placeholder="请输入搜索关键词" v-model="keyword" class="input-with-select">
                <el-select v-model="select" slot="prepend" placeholder="请选择" style="width: 100px;">
                  <el-option label="用户名" value="1"></el-option>
                  <el-option label="性别" value="2"></el-option>
                  <el-option label="年龄" value="3"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </el-col>
          </el-row>
        </div>
        <div class="list-body">
          <el-table ref="multipleTable" :data="userList" style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="username" label="用户名" width="130"></el-table-column>
            <el-table-column prop="gender" label="性别" width="70"></el-table-column>
            <el-table-column prop="rank" label="会员等级" width="100"></el-table-column>
            <el-table-column prop="mobile" label="联系方式" width="130"></el-table-column>
            <el-table-column prop="address" label="地址" width="300"></el-table-column>
            <el-table-column prop="memo" label="备注"></el-table-column>
            <el-table-column prop="action" label="操作">
              <template slot-scope="scope">
                <router-link :to="{path:'/user-detail', query: {userId: scope.row.id}}">
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
export default {
  data() {
    return {
      menu: '',
      title: '',
      select: '',
      keyword: '',
      deleteItem: true,
      userList: [],
      ids: [],
      currentPage: 1,
    }
  },
  mounted() {
    this.menu = this.$route.meta.menu;
    this.title = this.$route.meta.title;
    this.getUserList();
  },
  methods: {
    getUserList() {
      const that = this;
      this.$axios.get('http://localhost:3000/api/user/users')
      .then(function (res) {
        that.userList = res.data.data;
      })
      .catch(function (error) {
        console.log(`error: ${error}`);
      });
    },
    refresh() {
      this.getUserList();
    },
    handleSelectionChange(val) {
      if (val.length > 0) {
        this.deleteItem = false;
        let ids = val.map(item => {
          return item.id;
        });
        this.ids = ids;
      } else {
        this.deleteItem = true;
      }
    },
    handleDelete() {
      const that = this;
      let data = {
        id: this.ids
      };
      this.$axios.post('http://localhost:3000/api/user/delete', data)
      .then(function (res) {
        console.log(res);
        that.getUserList();
      })
      .catch(function (error) {
        console.log(`error: ${error}`);
      });
    }
  }
}
</script>

<style scoped>
.btn-add {
  margin-right: 10px;
}
</style>