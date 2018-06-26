<template>
  <div class="main-header">
    <header class="clearfix">
      <a href="" class="logo">市民健康管理系统</a>
      <ul class="nav nav-bar clearfix">
        <li>
          <i class="el-icon-bell"></i>
        </li>
        <li>
          <i class="el-icon-setting"></i>
        </li>
        <li class="avatar">
          <img src="../../assets/images/user.jpg" alt="admin" />
        </li>
        <li>
          <el-dropdown class="user-name" trigger="click">
            <span class="el-dropdown-link">
              {{username}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>账号设置</el-dropdown-item>
              <el-dropdown-item>关于作者</el-dropdown-item>
              <el-dropdown-item>项目仓库</el-dropdown-item>
              <el-dropdown-item divided @click="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
      </ul>
    </header>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "admin"
    }
  },
  methods: {
    logout() {

    }
  }
}
</script>
<style scoped>
  .main-header {
    width: 100%;
    height: 50px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #3c8dbc;
  }
  a.logo {
    width: 230px;
    height: 50px;
    line-height: 50px;
    display: block;
    float: left;
    color: #ffffff;
    letter-spacing: 1px;
    text-align: center;
    background-color: #367fa9;
  }
  ul.nav {
    float: right;
    padding-right: 30px;
  }
  ul.nav li {
    height: 50px;
    line-height: 50px;
    float: left;
    padding: 0 10px;
    color: #ffffff;
    cursor: pointer;
  }
  ul.nav li:hover {
    background-color:  #367fa9;
  }
  .avatar img {
    width: 28px;
    height: 28px;
    vertical-align: middle;
    border-radius: 50%;
  }
  .user-name > span {
    color: #ffffff;
  }
</style>
