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
          path: '/seller-manage',
          component: resolve => require(['../components/page/SellerManage.vue'], resolve),
          meta: { title: '商家管理', menu: '医药电商管理' }
        },
        {
          path: '/seller-add',
          component: resolve => require(['../components/page/SellerAdd.vue'], resolve),
          meta: { title: '添加商家', menu: '医药电商管理' }
        },
        {
          path: '/shop-list',
          component: resolve => require(['../components/page/ShopList.vue'], resolve),
          meta: { title: '医药电商列表', menu: '医药电商管理' }
        },
        {
          path: '/shop-add',
          component: resolve => require(['../components/page/ShopAdd.vue'], resolve),
          meta: { title: '医药电商入驻', menu: '医药电商管理' }
        },
        {
          path: '/drug-search',
          component: resolve => require(['../components/page/DrugSearch.vue'], resolve),
          meta: { title: '精贵药品查询', menu: '医疗药品管理' }
        },
        {
          path: '/herb-search',
          component: resolve => require(['../components/page/HerbSearch.vue'], resolve),
          meta: { title: '中草药查询', menu: '医疗药品管理' }
        },
        {
          path: '/drug-trace',
          component: resolve => require(['../components/page/DrugTrace.vue'], resolve),
          meta: { title: '药品追溯', menu: '医疗药品管理' }
        },
        {
          path: '/medical-insititution',
          component: resolve => require(['../components/page/MedicalInsititution.vue'], resolve),
          meta: { title: '定点医疗机构' }
        },
        {
          path: '/admin-manage',
          component: resolve => require(['../components/page/AdminManage.vue'], resolve),
          meta: { title: '管理员账户管理', menu: '系统设置' }
        },
        {
          path: '/user-feedback',
          component: resolve => require(['../components/page/UserFeedback.vue'], resolve),
          meta: { title: '用户反馈', menu: '系统设置' }
        },
        {
          path: '/release-notice',
          component: resolve => require(['../components/page/ReleaseNotice.vue'], resolve),
          meta: { title: '发布公告', menu: '系统设置' }
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
          path: '/user-message',
          component: resolve => require(['../components/page/UserMessage.vue'], resolve),
          meta: { title: '用户消息' }
        },
        {
          path: '/shop-message',
          component: resolve => require(['../components/page/ShopMessage.vue'], resolve),
          meta: { title: '电商消息' }
        },
        
      ]
    },
  ]
});