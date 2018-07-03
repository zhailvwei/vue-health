<template>
  <div class="medical-institution-detail">
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
          
        </el-row>
      </div>
    </el-row>
  </div>
</template>

<script>
import hospitals from '@/json/hospitals.json';

export default {
  data() {
    return {
      menu: '',
      title: '',
      hospitalId: this.$route.query.hospitalId,
      hospitalInfo: []
    }
  },
  mounted() {
    this.menu = this.$route.meta.menu;
    this.title = this.$route.meta.title;

    let hospitalList = hospitals.hospitalList;
    let user = hospitalList.filter((item)=>{
      return this.hospitalId == item.id;
    });
    this.hospitalInfo = user[0];
  },
  methods: {
    back() {
      this.$router.push('/user-list');
    }
  },
}
</script>

<style scoped>
.content-box {
  padding: 0;
  background-color: transparent;
}
</style>
