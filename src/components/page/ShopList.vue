<template>
  <div class="shop-list">
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
              <router-link to="/seller-add">
                <el-button class="btn-add" icon="el-icon-plus">添加</el-button>
              </router-link>
              <el-button icon="el-icon-delete" disabled>删除</el-button>
              <el-button icon="el-icon-refresh">刷新</el-button>
            </el-col>
            <el-col :span="9">
              <el-input placeholder="请输入搜索关键词" v-model="keyword" class="input-with-select">
                <el-select v-model="select" slot="prepend" placeholder="请选择" style="width: 100px;">
                  <el-option label="店铺名称" value="1"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </el-col>
          </el-row>
        </div>
        <div class="list-body">
          <el-table ref="multipleTable" :data="shopList" style="width: 100%" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column label="店铺名称" width="150">
              <template slot-scope="scope">{{ scope.row.shop }}</template>
            </el-table-column>
            <el-table-column prop="type" label="类型" width="120"></el-table-column>
            <el-table-column prop="seller" label="商家" width="150"></el-table-column>
            <el-table-column prop="rank" label="店铺等级" width="120"></el-table-column>
            <el-table-column prop="beginDate" label="创建日期" width="150"></el-table-column>
            <el-table-column prop="memo" label="备注"></el-table-column>
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
      shopList: [
        {
          'shop': '市民健康大药房', 'type': '自营店铺', 'seller': 'zhai', 'rank': '金牌店铺', 'beginDate': '2016-06-06', 'memo': '无'
        },
        {
          'shop': '同仁堂大药房', 'type': '普通店铺', 'seller': '同仁堂', 'rank': '普通店铺', 'beginDate': '2017-07-07', 'memo': '无'
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