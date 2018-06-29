<template>

  <div class="main-sidebar">
    <happy-scroll color="rgba(255, 255, 255, 0.5)" hide-horizontal resize>
      <aside>
        <el-menu :default-active="handleRoutes"
          background-color="#222d32" text-color="#bfcbd9" active-text-color="#409eff"
          unique-opened router
        >
          <div class="menu-title">系统操作</div>
          <div v-for="(item, index) in menuItems" :key="index.toString()">
            <el-submenu v-if="item.sub" :index="index.toString()">
              <template slot="title">
                <i :class="[item.icon, 'menu-icon']"></i>
                <span>{{item.title}}</span>
              </template>
              <el-menu-item v-for="(subItem, subIndex) in item.sub" :key="subIndex.toString()" :index="subItem.index">{{subItem.title}}</el-menu-item>
            </el-submenu>
            <el-menu-item v-else :index="item.index">
              <i :class="[item.icon, 'menu-icon']"></i>
              <span slot="title">{{item.title}}</span>
            </el-menu-item>
          </div>
          <div class="menu-title">统计信息</div>
          <div v-for="(item, index) in chartItems" :key="index+10">
            <el-menu-item :index="item.index">
              <i :class="[item.icon, 'menu-icon']" :style="{color: item.color}"></i>
              <span slot="title">{{item.title}}</span>
            </el-menu-item>
          </div>
        </el-menu> 
      </aside>
    </happy-scroll>
  </div>
</template>

<script>
export default {
  name: 'main-sidebar',
  data() {
    return {
      searchKeyword: '',
      menuItems: [
        {
          'title': '市民健康',
          'index': 'home',
          'icon': 'iconfont icon-shouye1'
        },
        {
          'title': '用户管理',
          'icon': 'iconfont icon-shouye4',
          'sub': [
            {
              'title': '用户列表',
              'index': 'user-list',
            },
            {
              'title': '添加用户',
              'index': 'user-add',
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
            },
            {
              'title': '医药电商入驻',
              'index': 'shop-add',
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
            },
            {
              'title': '中草药查询',
              'index': 'herb-search',
            },
            {
              'title': '药品追溯',
              'index': 'drug-trace',
            }
          ]
        },
        {
          'title': '定点医疗机构',
          'index': 'medical-insititution',
          'icon': 'iconfont icon-yiliao'
        },
        {
          'title': '系统设置',
          'icon': 'iconfont icon-shouye11',
          'sub': [
            {
              'title': '管理员账户管理',
              'index': 'admin-manage',
            },
            {
              'title': '用户反馈',
              'index': 'user-feedback',
            },
            {
              'title': '发布公告',
              'index': 'release-notice',
            }
          ]
        },
        {
          'title': '在线客服',
          'index': 'custom-service',
          'icon': 'iconfont icon-shouye36'
        },
      ],
      chartItems: [
        {
          'title': '平台收支状况',
          'index': 'platform-finance',
          'icon': 'iconfont icon-areachart',
          'color': '#00a65a'
        },
        {
          'title': '用户注册统计',
          'index': 'user-statistics',
          'icon': 'iconfont icon-linechart',
          'color': '#f39c12'
        },
        {
          'title': '医药电商入驻统计',
          'index': 'shop-statistics',
          'icon': 'iconfont icon-barchart',
          'color': '#00c0ef'
        },
      ]
    }
  },
  methods: {
  },
  computed: {
    handleRoutes() {
      return this.$route.path.replace('/','');
    }
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
  overflow: hidden;
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
.main-sidebar .menu-title {
  height: 40px;
  line-height: 40px;
  padding-left: 20px;
  color: #4b646f;
  background-color: #1a2226;
}
</style>

