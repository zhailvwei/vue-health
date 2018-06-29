import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      component: resolve => require(['../components/page/Login.vue'], resolve)
    },
    {
      path: '/',
      component: resolve => require(['../components/layout/MainContainer.vue'], resolve),
      meta: { title: '系统首页' },
      children: [
        {
          path: '/home',
          component: resolve => require(['../components/page/Home.vue'], resolve),
          meta: { title: '市民健康' }
        },
        {
          path: '/user-list',
          component: resolve => require(['../components/page/UserList.vue'], resolve),
          meta: { title: '用户列表', menu: '用户管理'}
        },
        {
          path: '/user-add',
          component: resolve => require(['../components/page/UserAdd.vue'], resolve),
          meta: { title: '添加用户', menu: '用户管理'}
        },
        {
          path: '/shop-list',
          component: resolve => require(['../components/page/ShopList.vue'], resolve),
          meta: { title: '医药电商列表' }
        },
        {
          path: '/shop-add',
          component: resolve => require(['../components/page/ShopAdd.vue'], resolve),
          meta: { title: '医药电商入驻' }
        },
        {
          path: '/drug-search',
          component: resolve => require(['../components/page/DrugSearch.vue'], resolve),
          meta: { title: '精贵药品查询' }
        },
        {
          path: '/herb-search',
          component: resolve => require(['../components/page/HerbSearch.vue'], resolve),
          meta: { title: '中草药查询' }
        },
        {
          path: '/drug-trace',
          component: resolve => require(['../components/page/DrugTrace.vue'], resolve),
          meta: { title: '药品追溯' }
        },
        {
          path: '/medical-insititution',
          component: resolve => require(['../components/page/MedicalInsititution.vue'], resolve),
          meta: { title: '定点医疗机构' }
        },
        {
          path: '/admin-manage',
          component: resolve => require(['../components/page/AdminManage.vue'], resolve),
          meta: { title: '管理员账户管理' }
        },
        {
          path: '/user-feedback',
          component: resolve => require(['../components/page/UserFeedback.vue'], resolve),
          meta: { title: '用户反馈' }
        },
        {
          path: '/release-notice',
          component: resolve => require(['../components/page/ReleaseNotice.vue'], resolve),
          meta: { title: '发布公告' }
        },
        {
          path: '/custom-service',
          component: resolve => require(['../components/page/CustomService.vue'], resolve),
          meta: { title: '在线客服' }
        },
        {
          path: '/platform-finance',
          component: resolve => require(['../components/page/PlatformFinance.vue'], resolve),
          meta: { title: '平台收支状况' }
        },
        {
          path: '/user-statistics',
          component: resolve => require(['../components/page/UserStatistics.vue'], resolve),
          meta: { title: '用户注册统计' }
        },
        {
          path: '/shop-statistics',
          component: resolve => require(['../components/page/ShopStatistics.vue'], resolve),
          meta: { title: '医药电商入驻统计' }
        },
      ]
    },
  ]
});