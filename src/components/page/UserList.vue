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
                  <el-option label="用户名" value="username"></el-option>
                  <el-option label="性别" value="gender"></el-option>
                  <el-option label="会员等级" value="rank"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search" @click="handleFilterSearch"></el-button>
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
            <el-table-column prop="mobile" label="联系方式" width="120"></el-table-column>
            <el-table-column prop="address" label="地址" width="260"></el-table-column>
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
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-sizes="pageSizes"
            :page-size="pageSize"
            layout="sizes, prev, pager, next"
            :total="total">
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
      searchStatus: false,
      deleteItem: true,
      userList: [],
      ids: [],
      currentPage: 1,
      pageSize: 5,
      pageSizes: [5, 10, 15],
      total: 0,
    }
  },
  mounted() {
    this.menu = this.$route.meta.menu;
    this.title = this.$route.meta.title;
    this.getUserList();
  },
  methods: {
    // 获取用户列表
    getUserList() {
      const that = this;
      let data = {
        pageSize: this.pageSize,
        currentPage: this.currentPage
      };
      if (this.searchStatus === false) {
        this.$axios.post('http://localhost:3000/api/user/users', data)
        .then(function (res) {
          that.userList = res.data.data.onePageUsers;
          that.total = res.data.data.userTotalCount;
        })
        .catch(function (error) {
          console.log(`error: ${error}`);
        });
      } else {
        this.getFilterUserList();
      }
    },
    // 获取条件查询用户列表
    getFilterUserList() {
      const that = this;
      let data = {
        pageSize: this.pageSize,
        currentPage: this.currentPage,
        select: this.select,
        keyword: this.keyword
      }
      this.$axios.post('http://localhost:3000/api/user/search', data)
      .then(function (res) {
        that.searchStatus = true;
        that.userList = res.data.data.onePageFilterUsers;
        that.total = res.data.data.filterUserTotalCount;
      })
      .catch(function (error) {
        console.log(`error: ${error}`);
      });
    },
    refresh() {
      this.searchStatus = false;
      this.getUserList();
    },
    // 条件查询
    handleFilterSearch() {
      if (this.select !== '' && this.keyword !== '') {
        this.getFilterUserList();
      }
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
        ids: this.ids
      };
      this.$confirm('您确认要删除吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$axios.post('http://localhost:3000/api/user/delete', data)
        .then(function () {
          that.getUserList();
          let currentUserListLength = that.userList.length - 1;
          if (currentUserListLength === 0 && that.currentPage !== 1) {
            that.currentPage -= 1;
            that.getUserList();
          }
          that.$message({
            message: '操作成功！',
            type: 'success',
            duration: 1500
          });
        })
        .catch(function (error) {
          console.log(`error: ${error}`);
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.getUserList();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getUserList();
    }
  }
}
</script>

<style scoped>
.btn-add {
  margin-right: 10px;
}
</style>