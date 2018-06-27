<template>
  <div class="main-sidebar">
    <aside>
      <el-menu default-active="0"
        background-color="#222d32" text-color="#bfcbd9" active-text-color="#409eff"
        unique-opened router
      >
        <div v-for="(item, index) in menuItems" :key="index.toString()">
          <el-submenu v-if="item.sub" :index="index.toString()">
            <template slot="title">
              <i :class="[item.icon, 'menu-icon']"></i>
              <span>{{item.title}}</span>
            </template>
            <el-menu-item v-for="(subItem, subIndex) in item.sub" :key="subIndex.toString()" :index="subItem.index">{{subItem.title}}</el-menu-item>
          </el-submenu>
          <el-menu-item v-else :index="index.toString()">
            <i :class="[item.icon, 'menu-icon']"></i>
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
        </div>
      </el-menu> 
    </aside>
  </div>
</template>

<script>
export default {
  name: 'main-sidebar',
  data() {
    return {
      searchKeyword: '',
      currentIndex: 0,
      subCurrentIndex: 10086,
      currentChartIndex: 10010,
      menuItems: [
        {
          'title': '市民健康',
          'icon': 'iconfont icon-shouye1'
        },
        {
          'title': '用户管理',
          'icon': 'iconfont icon-shouye4',
          'sub': [
            {
              'title': '用户列表',
              'index': 'user-list',
              'path': ''
            },
            {
              'title': '添加用户',
              'index': 'user-add',
              'path': ''
            }
          ]
        },
        {
          'title': '医药电商管理',
          'icon': 'iconfont icon-shouye9',
          'sub': [
            {
              'title': '医药电商列表',
              'index': 'shop-list',
              'path': ''
            },
            {
              'title': '医药电商入驻',
              'index': 'shop-add',
              'path': ''
            }
          ]
        },
        {
          'title': '医疗药品管理',
          'icon': 'iconfont icon-shouye5',
          'sub': [
            {
              'title': '精贵药品查询',
              'index': 'drug-search',
              'path': ''
            },
            {
              'title': '中草药查询',
              'index': 'herb-search',
              'path': ''
            },
            {
              'title': '药品追溯',
              'index': 'drug-trace',
              'path': ''
            }
          ]
        },
        {
          'title': '定点医疗机构',
          'icon': 'iconfont icon-yiliao'
        },
        {
          'title': '系统设置',
          'icon': 'iconfont icon-shouye11',
          'sub': [
            {
              'title': '管理员账户管理',
              'index': 'admin-manage',
              'path': ''
            },
            {
              'title': '用户反馈',
              'index': 'user-feedback',
              'path': ''
            },
            {
              'title': '发布公告',
              'index': 'release-notice',
              'path': ''
            }
          ]
        },
        {
          'title': '在线客服',
          'icon': 'el-icon-service'
        },
      ],
      chartItems: [
        {
          'title': '平台收支状况',
          'icon': 'iconfont icon-areachart',
          'color': '#00a65a'
        },
        {
          'title': '用户注册统计',
          'icon': 'iconfont icon-linechart',
          'color': '#f39c12'
        },
        {
          'title': '医药电商入驻统计',
          'icon': 'iconfont icon-barchart',
          'color': '#00c0ef'
        },
      ]
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.main-sidebar {
  width: 230px;
  position: absolute;
  top: 50px;
  bottom: 0;
  left: 0;
  font-size: 14px;
  background-color: #222d32;
}
.el-menu {
  width: 230px;
}
.el-menu-item, .el-submenu__title {
  height: 40px;
  line-height: 40px;
  padding: 0 15px;
}
.el-submenu[aria-expanded=true] .el-submenu__title {
  color: #ffffff;
}
.main-sidebar .menu-icon {
  padding-right: 15px;
}
</style>

