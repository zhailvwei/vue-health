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
              <el-button icon="el-icon-plus" size="small">添加</el-button>
              <el-button icon="el-icon-delete" size="small" disabled>删除</el-button>
              <el-button icon="el-icon-refresh" size="small">刷新</el-button>
            </el-col>
            <el-col :span="9">
              <el-input placeholder="请输入搜索关键词" v-model="keyword" class="input-with-select" size="small">
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
          <el-table ref="multipleTable" :data="userList" style="width: 100%" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column label="用户名" width="150">
              <template slot-scope="scope">{{ scope.row.username }}</template>
            </el-table-column>
            <el-table-column prop="gender" label="性别" width="100"></el-table-column>
            <el-table-column prop="age" label="年龄" width="100"></el-table-column>
            <el-table-column prop="mobile" label="联系方式" width="150"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
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
export default {
  data() {
    return {
      menu: '',
      title: '',
      select: '',
      keyword: '',
      userList: [
        {
          'username': '翟一', 'gender': '女', 'age': 18, 'mobile': '15288886666', 'address': '浙江省杭州市西湖区塘苗路川味泡菜馆'
        },
        {
          'username': '翟二', 'gender': '女', 'age': 16, 'mobile': '13268188866', 'address': '浙江省杭州市拱墅区庆春路海底捞'
        },
      ],
      currentPage: 1
    }
  },
  mounted() {
    this.menu = this.$route.meta.menu;
    this.title = this.$route.meta.title;
  },
  methods: {
    handleSelectionChange() {

    },
    handleSizeChange() {
      //console.log(`每页 ${val} 条`);
    },
    handleCurrentChange() {
      //console.log(`当前页: ${val}`);
    }
  }
}
</script>

<style scoped>

</style>