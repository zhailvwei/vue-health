<template>
  <div class="main-sidebar">
    <aside>
      <div class="title">管理员操作</div>
      <div class="menu" v-for="(item, index) in menuItems" :key="index">
        <div :class="[{open: index === currentIndex}, 'menu-item']" @click="handleMenuChange(index)">
          <i :class="item.icon"></i>
          {{item.title}}
          <i class="el-icon-arrow-right" v-if="item.sub"></i>
        </div>
        <transition name="fade">
          <ul
            class="sub-item"
            v-show="index === currentIndex" 
          >
            <li
              v-for="(subItem, subIndex) in item.sub"
              :key="subIndex" :class="{select: index === currentIndex && subIndex === subCurrentIndex}"
              @click="handleSubMenuChange(subIndex)"
            >
              <i class="iconfont icon-circle"></i>
              {{subItem.title}}
            </li>
          </ul>
        </transition>
      </div>
      <div class="title">统计报表</div>
      <div class="menu" v-for="(item, index) in chartItems" :key="index+100">
        <div :class="[{open: index === currentChartIndex}, 'menu-item']" @click="handleChartChange(index)">
          <i :class="item.icon" :style="{color: item.color}"></i>
          {{item.title}}
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchKeyword: '',
      currentIndex: 0,
      subCurrentIndex: 10086,
      currentChartIndex: 10010,
      menuItems: [
        {
          'title': '用户管理',
          'icon': 'iconfont icon-shouye4',
          'sub': [
            {
              'title': '用户列表',
              'path': ''
            },
            {
              'title': '添加用户',
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
              'path': ''
            },
            {
              'title': '医药电商入驻',
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
              'path': ''
            },
            {
              'title': '中草药查询',
              'path': ''
            },
            {
              'title': '药品追溯',
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
          'icon': 'el-icon-setting',
          'sub': [
            {
              'title': '管理员账户管理',
              'path': ''
            },
            {
              'title': '',
              'path': ''
            },
            {
              'title': '药品追溯',
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
    handleMenuChange(index) {
      this.currentIndex = index;
      this.subCurrentIndex = 10086;
      //this.currentChartIndex = 10086;
    },
    handleMenuChange(index) {
      this.currentIndex = index;
      this.subCurrentIndex = 10086;
    },
    handleChartChange(chartIndex) {
      this.currentIndex = 10086;
      this.currentChartIndex = chartIndex;
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
  background-color: #222d32;
}
.main-sidebar .title {
  padding: 10px 15px;
  color: #4b646f;
  background-color: #1a2226;
}
.main-sidebar .menu-item {
  padding: 15px;
  color: #b8c7ce;
  position: relative;
  cursor: pointer;
  border-left: 3px solid #222d32;
}
.main-sidebar .menu-item i:first-child {
  margin-right: 15px;
  vertical-align: middle;
}
.main-sidebar .menu-item>.el-icon-arrow-right {
  position: absolute;
  top: 20px;
  right: 15px;
  font-size: 12px;
}
.main-sidebar .menu-item.open {
  border-color: #3c8dbc;
  color: #ffffff;
  background-color: #1e282c;
}
.main-sidebar .menu-item:hover {
  color: #ffffff;
  background-color: #1e282c;
}
.main-sidebar .menu-item.open>.el-icon-arrow-right {
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
  transition: 0.3s;
}
.main-sidebar .sub-item {
  font-size: 12px;
  color: #b8c7ce;
  overflow: hidden;
  background-color: #2c3b41;
}
.main-sidebar .sub-item li {
  cursor: pointer;
  padding: 10px 0 10px 20px;
}
.main-sidebar .sub-item li:hover {
  color: #ffffff;
}
.main-sidebar .sub-item li.select {
  color: #ffffff;
}
.main-sidebar .sub-item li .iconfont {
  margin-right: 10px;
  vertical-align: middle;
}
.fade-enter-active, .fade-leave-active {
  transition: all 0.3s;
}
.fade-enter, .fade-leave-to {
  height: 0 !important;
}
</style>

